import os
import re

dir_path = r'E:\Modding2\SourceAzeroth\Archives\www.gotwow.ic.cz'

button_style = """
<style>
#sa-back-btn {
  position: fixed;
  top: 14px;
  left: 14px;
  z-index: 99999;
  display: inline-flex;
  align-items: center;
  gap: 7px;
  background: #1a1a1a;
  color: #f39c12;
  border: 1px solid #f39c12;
  padding: 7px 14px;
  border-radius: 6px;
  font-family: 'Segoe UI', Tahoma, sans-serif;
  font-size: 13px;
  font-weight: bold;
  text-decoration: none;
  transition: background 0.2s, color 0.2s;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0,0,0,0.5);
}
#sa-back-btn:hover {
  background: #f39c12;
  color: #1a1a1a;
}
#sa-back-btn svg {
  width: 14px;
  height: 14px;
  fill: currentColor;
  flex-shrink: 0;
}
</style>
"""

count = 0

for root, dirs, files in os.walk(dir_path):
    for file in files:
        if file.endswith('.html') and file != 'fix_html.py':
            file_path = os.path.join(root, file)
            with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
                content = f.read()

            # Skip if already has the button
            if 'sa-back-btn' in content:
                continue

            # Calculate depth to get back to main index.html
            rel = os.path.relpath(file_path, dir_path)
            depth = len(rel.split(os.sep))  # includes filename
            back_path = '../' * depth + 'index.html'

            button_html = f"""
<a id="sa-back-btn" href="{back_path}">
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
  Source Azeroth
</a>
"""
            # Inject style in <head> and button right after <body>
            content = content.replace('</head>', button_style + '</head>', 1)
            content = re.sub(r'(<body[^>]*>)', r'\1' + button_html, content, count=1)

            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)

            count += 1
            print(f"Updated: {file_path}")

print(f"\nDone — {count} files updated.")
