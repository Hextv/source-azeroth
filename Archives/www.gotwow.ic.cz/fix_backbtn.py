import os
import re

dir_path = r'E:\Modding2\SourceAzeroth\Archives\www.gotwow.ic.cz'
count = 0

for root, dirs, files in os.walk(dir_path):
    for file in files:
        if not file.endswith('.html'):
            continue
        fp = os.path.join(root, file)
        with open(fp, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()

        if 'sa-back-btn' not in content:
            continue

        # depth relative to archive root (includes filename), +1 for Archives/, +1 for www.gotwow.ic.cz/
        rel = os.path.relpath(fp, dir_path)
        depth = len(rel.split(os.sep))
        correct_path = '../' * (depth + 1) + 'index.html'

        # Replace the href on the back button
        new_content = re.sub(
            r'id="sa-back-btn" href="[^"]*"',
            f'id="sa-back-btn" href="{correct_path}"',
            content
        )

        if new_content != content:
            with open(fp, 'w', encoding='utf-8') as f:
                f.write(new_content)
            count += 1
            print(f'Fixed: {rel}  ->  {correct_path}')

print(f'\nDone - {count} files fixed.')
