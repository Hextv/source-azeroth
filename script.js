// script.js
document.addEventListener("DOMContentLoaded", () => {

  // --- 0. HIDE PAGE LOADER ---
  const loader = document.getElementById('page-loader');
  if (loader) {
    // Small delay so the first render frame completes before fading out
    requestAnimationFrame(() => {
      setTimeout(() => loader.classList.add('hidden'), 20);
    });
  }

  // --- 1. RENDER DATA FROM data.js ---
  const timelineContainer = document.getElementById("timeline-container");
  const blogContainer = document.getElementById("blog-container");

  // Render Timeline
  siteData.timeline.forEach((event, index) => {
    // Alternate left/right based on index
    const sideClass = index % 2 === 0 ? "left" : "right";
    
    // Build paragraph HTML
    const paragraphsHtml = event.paragraphs.map(p => `<p>${p}</p>`).join("");
    
    // Prepare GitHub Repo Link & Stats Container
    let githubHtml = '';
    if (event.githubRepo) {
      const repoName = event.githubRepo.split('/')[1] || event.githubRepo;
      githubHtml = `
        <div class="github-container">
          <a href="https://github.com/${event.githubRepo}" target="_blank" class="gh-repo-badge" title="View ${event.githubRepo} on GitHub">
            <i class="fa-brands fa-github"></i> <strong>${repoName}</strong>
          </a>
          <div class="github-stats" id="github-stats-${event.id}">
            <span class="gh-stat"><i class="fa-solid fa-spinner fa-spin"></i></span>
          </div>
        </div>
      `;
    }

    const block = document.createElement("div");
    block.className = `timeline-block ${sideClass}`;
    block.setAttribute("data-category", event.category);
    block.setAttribute("data-index", index);
    block.innerHTML = `
      <div class="timeline-icon"><i class="${event.icon}"></i></div>
      <div class="timeline-content">
        <span class="timeline-date">${event.date}</span>
        <h2>${event.title}</h2>
        <div class="text-content">
          ${paragraphsHtml}
        </div>
        <button class="read-more-btn">Read More</button>
        <div class="tag-container">
          <span class="tag">${event.tag}</span>
          ${githubHtml}
        </div>
      </div>
    `;
    timelineContainer.appendChild(block);
  });

  // Render Blog
  siteData.blog.forEach(post => {
    const paragraphsHtml = post.paragraphs.map(p => `<p>${p}</p>`).join("");

    const article = document.createElement("article");
    article.className = "blog-card";
    article.innerHTML = `
      <div class="blog-header">
        <h2>${post.title}</h2>
        <span class="blog-meta">Posted by <strong>${post.author}</strong> | ${post.date}</span>
      </div>
      <div class="blog-body">
        ${paragraphsHtml}
      </div>
    `;
    blogContainer.appendChild(article);
  });

  // Add empty state message for searches
  const emptyStateMsg = document.createElement("div");
  emptyStateMsg.id = "empty-state-msg";
  emptyStateMsg.innerText = "No events found matching your search and filter criteria.";
  timelineContainer.appendChild(emptyStateMsg);


  // --- 1.5. FETCH GITHUB API DATA (WITH LOCALSTORAGE CACHING) ---
  // Cache GitHub responses in localStorage for 1 hour (3600000ms) to prevent rate-limiting on GitHub Pages
  async function fetchCachedJson(url, cacheKey, ttlMs = 3600000) {
    try {
      const cached = localStorage.getItem(cacheKey);
      if (cached) {
        const { timestamp, data } = JSON.parse(cached);
        if (Date.now() - timestamp < ttlMs) {
          return data;
        }
      }
    } catch (e) {
      // Ignore localStorage errors
    }
    
    const response = await fetch(url);
    const data = await response.json();
    
    if (response.ok && data) {
      try {
        localStorage.setItem(cacheKey, JSON.stringify({ timestamp: Date.now(), data }));
      } catch (e) {
        // Ignore localStorage errors
      }
    }
    return data;
  }

  siteData.timeline.forEach(event => {
    if (event.githubRepo) {
      const statsContainer = document.getElementById(`github-stats-${event.id}`);
      const cacheKey = `gh_stats_${event.githubRepo}`;
      
      fetchCachedJson(`https://api.github.com/repos/${event.githubRepo}`, cacheKey)
        .then(repoData => {
          if (repoData && repoData.stargazers_count !== undefined) {
             statsContainer.innerHTML = `
               <span class="gh-stat" title="Stars"><i class="fa-solid fa-star"></i> ${repoData.stargazers_count}</span>
               <span class="gh-stat" title="Forks"><i class="fa-solid fa-code-branch"></i> ${repoData.forks_count}</span>
             `;
          } else {
             statsContainer.innerHTML = ``;
          }
        })
        .catch(err => {
          statsContainer.innerHTML = ``;
        });
    }
  });


  // --- 2. MAIN NAVIGATION ---
  const navBtns = document.querySelectorAll('.nav-btn');
  const pageSections = document.querySelectorAll('.page-section');
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const mainNav = document.getElementById('main-nav');

  // Hamburger toggle
  if (hamburgerBtn && mainNav) {
    hamburgerBtn.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('mobile-open');
      hamburgerBtn.innerHTML = isOpen
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';
    });
  }

  navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      navBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Close mobile nav after selection
      if (mainNav) mainNav.classList.remove('mobile-open');
      if (hamburgerBtn) hamburgerBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';

      const targetId = btn.getAttribute('data-target');
      const cleanHash = targetId.replace('-section', '');
      if (window.location.hash !== '#' + cleanHash) {
        history.pushState(null, null, '#' + cleanHash);
      }
      pageSections.forEach(section => {
        if (section.id === targetId) {
          section.classList.remove('hidden');
          section.classList.add('active');
        } else {
          section.classList.add('hidden');
          section.classList.remove('active');
        }
      });
    });
  });


  // --- 3. FILTER & SEARCH LOGIC ---
  const filterBtns = document.querySelectorAll('.filter-btn');
  const searchBar = document.getElementById('search-bar');
  
  function applyFiltersAndSearch() {
    const timelineBlocks = Array.from(document.querySelectorAll('.timeline-block'));
    const activeBtn = document.querySelector('.filter-btn.active');
    const activeCategory = activeBtn ? activeBtn.getAttribute('data-filter') : 'all';
    
    const searchQuery = searchBar.value.toLowerCase().trim();

    // Calculate relevance score for each block
    timelineBlocks.forEach(block => {
      const category = block.getAttribute('data-category');
      const title = (block.querySelector('h2')?.innerText || '').toLowerCase();
      const tag = (block.querySelector('.tag')?.innerText || '').toLowerCase();
      const repo = (block.querySelector('.gh-repo-badge')?.innerText || '').toLowerCase();
      const textContent = block.innerText.toLowerCase();

      const matchesCategory = (activeCategory === 'all' || activeCategory === category);
      let score = 0;

      if (searchQuery.length > 0) {
        if (title.startsWith(searchQuery)) score += 2000;
        else if (title.includes(searchQuery)) score += 1000;
        if (tag.includes(searchQuery) || repo.includes(searchQuery)) score += 500;
        if (textContent.includes(searchQuery)) score += 10;
      } else {
        score = 1; // Equal score when not searching
      }

      block._score = score;
      block._matches = matchesCategory && (searchQuery.length === 0 || score > 0);
    });

    // Sort blocks: if searching, sort by relevance score descending. Otherwise restore original chronological order.
    timelineBlocks.sort((a, b) => {
      if (searchQuery.length > 0 && b._score !== a._score) {
        return b._score - a._score;
      }
      return parseInt(a.getAttribute('data-index') || 0) - parseInt(b.getAttribute('data-index') || 0);
    });

    let visibleCount = 0;
    const timelineContainer = document.getElementById("timeline-container");
    
    timelineBlocks.forEach(block => {
      if (block._matches) {
        block.classList.remove('hidden');
        block.classList.remove('left', 'right');
        block.classList.add(visibleCount % 2 === 0 ? 'left' : 'right');
        visibleCount++;
      } else {
        block.classList.add('hidden');
      }
      timelineContainer.appendChild(block);
    });

    if (visibleCount === 0) {
      emptyStateMsg.classList.add('active');
    } else {
      emptyStateMsg.classList.remove('active');
    }
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(button => button.classList.remove('active'));
      btn.classList.add('active');
      applyFiltersAndSearch();
    });
  });

  const clearSearchBtn = document.getElementById('clear-search-btn');
  if (searchBar) {
    searchBar.addEventListener('input', () => {
      applyFiltersAndSearch();
      if (searchBar.value.length > 0) {
        if (clearSearchBtn) clearSearchBtn.classList.remove('hidden');
      } else {
        if (clearSearchBtn) clearSearchBtn.classList.add('hidden');
      }
    });
  }
  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
      searchBar.value = '';
      clearSearchBtn.classList.add('hidden');
      applyFiltersAndSearch();
      searchBar.focus();
    });
  }


  // --- 4. READ MORE / CLAMP LOGIC ---
  const readMoreBtns = document.querySelectorAll('.read-more-btn');

  readMoreBtns.forEach(btn => {
    const textContent = btn.previousElementSibling;

    if (textContent.scrollHeight <= textContent.clientHeight) {
      btn.classList.add('hidden');
    }

    btn.addEventListener('click', () => {
      textContent.classList.toggle('expanded');
      
      if (textContent.classList.contains('expanded')) {
        btn.textContent = 'Read Less';
      } else {
        btn.textContent = 'Read More';
      }
    });
  });


  // --- 5. RULESET MODAL LOGIC ---
  const rulesModal = document.getElementById('rules-modal');
  const openRulesBtn = document.getElementById('open-rules-modal-btn');
  const closeRulesBtn = document.getElementById('close-rules-modal-btn');

  if (openRulesBtn && rulesModal && closeRulesBtn) {
    openRulesBtn.addEventListener('click', () => {
      rulesModal.classList.remove('hidden');
    });

    closeRulesBtn.addEventListener('click', () => {
      rulesModal.classList.add('hidden');
    });

    rulesModal.addEventListener('click', (e) => {
      if (e.target === rulesModal) {
        rulesModal.classList.add('hidden');
      }
    });
  }


  // --- 6. SUBMIT EVENT MODAL & PR GENERATOR ---
  const modal = document.getElementById('submit-modal');
  const openModalBtn = document.getElementById('open-submit-modal-btn');
  const closeModalBtn = document.getElementById('close-modal-btn');
  const eventForm = document.getElementById('submit-event-form');
  const snippetContainer = document.getElementById('snippet-output-container');
  const snippetCode = document.getElementById('snippet-code');
  const copySnippetBtn = document.getElementById('copy-snippet-btn');

  if (openModalBtn) {
    openModalBtn.addEventListener('click', () => {
      modal.classList.remove('hidden');
    });
  }

  const closeSubmitModal = () => {
    modal.classList.add('hidden');
    if (eventForm) eventForm.reset();
    if (snippetContainer) snippetContainer.classList.add('hidden');
    if (copySnippetBtn) copySnippetBtn.innerHTML = `<i class="fa-regular fa-copy"></i> Copy Code`;
  };

  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeSubmitModal);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeSubmitModal();
      }
    });
  }

  function getIconForCategory(cat) {
    if (cat === 'core') return 'fa-solid fa-server';
    if (cat === 'tools') return 'fa-solid fa-database';
    if (cat === 'web') return 'fa-solid fa-globe';
    return 'fa-solid fa-code';
  }

  if (eventForm) {
    eventForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const title = document.getElementById('event-title').value.trim();
      const date = document.getElementById('event-date').value.trim();
      const category = document.getElementById('event-category').value;
      const tag = document.getElementById('event-tag').value.trim();
      const github = document.getElementById('event-github').value.trim();
      const descText = document.getElementById('event-description').value.trim();

      const paragraphs = descText.split(/\n\s*\n/).map(p => p.trim()).filter(p => p.length > 0);

      const newId = `event-${siteData.timeline.length + 1}`;
      const iconClass = getIconForCategory(category);

      let snippetObj = `{
`;
      snippetObj += `  id: "${newId}",
`;
      snippetObj += `  category: "${category}",
`;
      snippetObj += `  icon: "${iconClass}",
`;
      snippetObj += `  date: "${date}",
`;
      snippetObj += `  title: "${title}",
`;
      snippetObj += `  paragraphs: [
`;
      paragraphs.forEach((p, idx) => {
        const comma = idx < paragraphs.length - 1 ? ',' : '';
        snippetObj += `    "${p.replace(/"/g, '\"')}"${comma}
`;
      });
      snippetObj += `  ],
`;
      snippetObj += `  tag: "${tag}"`;
      if (github) {
        snippetObj += `,
  githubRepo: "${github}"`;
      }
      snippetObj += `
}`;

      snippetCode.textContent = snippetObj;
      snippetContainer.classList.remove('hidden');

      modal.querySelector('.modal-box').scrollTo({
        top: modal.querySelector('.modal-box').scrollHeight,
        behavior: 'smooth'
      });
    });
  }

  if (copySnippetBtn) {
    copySnippetBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(snippetCode.textContent).then(() => {
        copySnippetBtn.innerHTML = `<i class="fa-solid fa-check"></i> Copied!`;
        setTimeout(() => {
          copySnippetBtn.innerHTML = `<i class="fa-regular fa-copy"></i> Copy Code`;
        }, 2000);
      });
    });
  }

    // --- 7. FETCH CONTRIBUTORS (HALL OF FAME) ---
  const contributorsList = document.getElementById("contributors-list");
  const seeMoreContainer = document.getElementById("see-more-container");
  const seeMoreBtn = document.getElementById("see-more-contributors-btn");

  if (contributorsList && siteData.siteRepo) {
    let validContributors = [];
    let currentDisplayed = 0;
    const batchSize = 5;
    let currentApiPage = 1;
    let hasMoreApiPages = true;
    let isFetching = false;

    const renderUsers = (users) => {
      users.forEach(user => {
        const row = document.createElement("a");
        row.className = "contributor-row";
        row.href = user.html_url;
        row.target = "_blank";
        row.innerHTML = `
          <img src="${user.avatar_url}" alt="${user.login}" class="contributor-avatar" />
          <span class="contributor-name">${user.login}</span>
        `;
        contributorsList.appendChild(row);
      });
    };

    const fetchNextPage = async () => {
      if (isFetching || !hasMoreApiPages) return;
      isFetching = true;
      try {
        // Fetch up to 100 at a time with localStorage caching (1 hr TTL)
        const cacheKey = `gh_contribs_${siteData.siteRepo}_page_${currentApiPage}`;
        const data = await fetchCachedJson(`https://api.github.com/repos/${siteData.siteRepo}/contributors?per_page=100&page=${currentApiPage}`, cacheKey);
        
        if (Array.isArray(data) && data.length > 0) {
          const newValid = data.filter(user => user.type === "User" && !user.login.toLowerCase().includes("bot"));
          validContributors = validContributors.concat(newValid);
          
          if (data.length < 100) {
            hasMoreApiPages = false; // Reached the very end of all contributors
          } else {
            currentApiPage++;
          }
        } else {
          hasMoreApiPages = false;
        }
      } catch (err) {
        console.error("Error fetching contributors:", err);
        hasMoreApiPages = false;
      }
      isFetching = false;
    };

    const handleLoadMore = async () => {
      if (seeMoreBtn) seeMoreBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Loading...`;
      
      // If we are running low on fetched contributors, fetch the next page from GitHub API dynamically
      if (validContributors.length - currentDisplayed < batchSize && hasMoreApiPages) {
        await fetchNextPage();
      }
      
      const nextBatch = validContributors.slice(currentDisplayed, currentDisplayed + batchSize);
      renderUsers(nextBatch);
      currentDisplayed += nextBatch.length;
      
      if (seeMoreBtn) seeMoreBtn.innerHTML = `See more`;

      // Hide the button ONLY if we've shown everyone AND there are no more API pages to fetch
      if (currentDisplayed >= validContributors.length && !hasMoreApiPages) {
        if (seeMoreContainer) seeMoreContainer.classList.add("hidden");
      } else {
        if (seeMoreContainer) seeMoreContainer.classList.remove("hidden");
      }
    };

    // Initialize
    (async () => {
      await fetchNextPage();
      contributorsList.innerHTML = ""; // Clear initial loading message
      
      if (validContributors.length > 0) {
        await handleLoadMore();
      } else {
        contributorsList.innerHTML = `<div class="loading-msg">No contributors yet.</div>`;
      }
    })();

    if (seeMoreBtn) {
      seeMoreBtn.addEventListener("click", handleLoadMore);
    }
  }


  // --- 8. KEYBOARD SHORTCUTS ---
  document.addEventListener('keydown', (e) => {
    // Ctrl+K or Cmd+K
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      if (searchBar) searchBar.focus();
    }
    // Forward slash (/)
    if (e.key === '/' && document.activeElement !== searchBar && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
      e.preventDefault();
      if (searchBar) searchBar.focus();
    }
    // Escape
    if (e.key === 'Escape') {
      const submitModal = document.getElementById('submit-modal');
      const rulesModalObj = document.getElementById('rules-modal');
      
      if (submitModal && !submitModal.classList.contains('hidden')) {
        submitModal.classList.add('hidden');
        if (document.getElementById('submit-event-form')) document.getElementById('submit-event-form').reset();
        if (document.getElementById('snippet-output-container')) document.getElementById('snippet-output-container').classList.add('hidden');
        if (document.getElementById('copy-snippet-btn')) document.getElementById('copy-snippet-btn').innerHTML = `<i class="fa-regular fa-copy"></i> Copy Code`;
      }
      if (rulesModalObj && !rulesModalObj.classList.contains('hidden')) {
        rulesModalObj.classList.add('hidden');
      }
    }
  });

  // --- 9. BACK TO TOP BUTTON ---
  const backToTopBtn = document.getElementById('back-to-top-btn');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    });
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // --- 10. INITIAL URL HASH LOAD ---
  const initialHash = window.location.hash.replace('#', '');
  if (initialHash) {
    const targetBtn = document.querySelector(`.nav-btn[data-target="${initialHash}-section"]`);
    if (targetBtn) {
      targetBtn.click();
    }
  }
});
