import os
import re

dir_path = r'E:\Modding2\SourceAzeroth\Archives\www.gotwow.ic.cz'

head_pattern = re.compile(r'(<head[^>]*>)\s*<script charset="utf-8" src="https://web-static\.archive\.org/.*?<!-- End Wayback Rewrite JS Include -->\s*', re.IGNORECASE | re.DOTALL)
iclista_pattern = re.compile(r'<!-- IClista -->.*?<!-- /IClista -->\s*', re.IGNORECASE | re.DOTALL)
google_ads_pattern = re.compile(r'<script type="text/javascript"><!--\s*google_ad_client = .*?//-->\s*</script>\s*<script src="https://web\.archive\.org/.*?pagead/show_ads\.js" type="text/javascript">\s*</script>\s*', re.IGNORECASE | re.DOTALL)
google_analytics_pattern = re.compile(r'<script type="text/javascript">\s*var gaJsHost = .*?pageTracker\._trackPageview\(\);\s*} catch\(err\) {}\s*</script>\s*', re.IGNORECASE | re.DOTALL)
wayback_footer_pattern = re.compile(r'<!--\s*playback timings.*?-->\s*', re.IGNORECASE | re.DOTALL)
css_import_pattern1 = re.compile(r'@import url\(\s*https://web\.archive\.org/[^)]*?/(http://[^)]*?)\s*\);', re.IGNORECASE)
css_import_pattern2 = re.compile(r'@import "https://web\.archive\.org/[^"]*?/(http://[^"]*?)";', re.IGNORECASE)

count = 0

for root, dirs, files in os.walk(dir_path):
    for file in files:
        if file.endswith('.html'):
            file_path = os.path.join(root, file)
            with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
                content = f.read()

            original = content
            
            # Clean scripts
            content = head_pattern.sub(r'\1\n', content)
            content = iclista_pattern.sub('', content)
            content = google_ads_pattern.sub('', content)
            content = google_analytics_pattern.sub('', content)
            content = wayback_footer_pattern.sub('', content)

            # Fix backslashes in href and src
            content = re.sub(r'(href|src)="([^"]*?\\[^"]*?)"', lambda m: f'{m.group(1)}="{m.group(2).replace(chr(92), "/")}"', content)
            
            # Fix CSS imports
            content = css_import_pattern1.sub(r'@import url(\1);', content)
            content = css_import_pattern2.sub(r'@import "\1";', content)

            # Fix wayback prefixes in links
            content = re.sub(r'https?://web\.archive\.org/web/\d+[a-z_]*/(http://www\.gotwow\.ic\.cz/)', r'\1', content)

            if original != content:
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(content)
                count += 1
                print(f"Updated {file_path}")

print(f"Total files updated: {count}")
