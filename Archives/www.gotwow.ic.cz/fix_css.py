import os
import re

dir_path = r'E:\Modding2\SourceAzeroth\Archives\www.gotwow.ic.cz'

# Remaining ic.cz lista script not caught before (wasn't wrapped in IClista comments)
iclista_bare = re.compile(r'<script src="https://web\.archive\.org/[^"]*?lista\.black\.utf\.js"[^>]*>\s*</script>\s*', re.IGNORECASE | re.DOTALL)

count = 0

for root, dirs, files in os.walk(dir_path):
    for file in files:
        if file.endswith('.html'):
            file_path = os.path.join(root, file)
            with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
                content = f.read()

            original = content

            # Remove bare lista.black.utf.js script tags
            content = iclista_bare.sub('', content)

            # Calculate depth relative to archive root
            rel = os.path.relpath(file_path, dir_path)
            depth = len(rel.split(os.sep)) - 1  # minus 1 for the file itself
            prefix = '../' * depth if depth > 0 else ''

            # Determine which theme this page uses
            uses_odin = 'odin_v4' in content or 'odin_v4' in file_path
            uses_lichking = 'wow-lich-king' in content

            # If the head section has no local stylesheet link, inject one
            has_local_css = bool(re.search(r'<link[^>]+rel="stylesheet"[^>]+href="[^h][^"]*style\.css"', content, re.IGNORECASE))

            if not has_local_css:
                if uses_lichking:
                    css_path = f'{prefix}wp-content/themes/wow-lich-king/style.css'
                elif uses_odin:
                    css_path = f'{prefix}wp-content/themes/odin_v4/style.css'
                else:
                    css_path = f'{prefix}wp-content/themes/odin_v4/style.css'

                inject = f'\n<link rel="stylesheet" href="{css_path}" type="text/css" media="screen" />'
                content = content.replace('</head>', inject + '\n</head>', 1)

            if original != content:
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(content)
                count += 1
                print(f"Updated {file_path}")

print(f"Total files updated: {count}")
