#!/usr/bin/env python3
import json
import os
import sys

def sync_version():
    root_dir = os.path.dirname(os.path.abspath(__file__))
    package_json_path = os.path.join(root_dir, 'package.json')
    
    if not os.path.exists(package_json_path):
        print(f"Error: {package_json_path} not found.")
        sys.exit(1)
        
    with open(package_json_path, 'r') as f:
        data = json.load(f)
        version = data.get('version')
        
    if not version:
        print("Error: Version not found in package.json")
        sys.exit(1)
        
    print(f"Syncing version: {version}")
    
    version_js_content = f'const GARDA_VERSION = "{version}";\n'
    
    targets = [
        os.path.join(root_dir, 'version.js'),
        os.path.join(root_dir, 'mobile/www/version.js'),
        os.path.join(root_dir, 'mobile/package.json')
    ]
    
    for target in targets:
        if os.path.exists(target):
            if target.endswith('.json'):
                with open(target, 'r') as f:
                    t_data = json.load(f)
                t_data['version'] = version
                with open(target, 'w') as f:
                    json.dump(t_data, f, indent=2)
                    f.write('\n')
                print(f"Updated: {target}")
            else:
                with open(target, 'w') as f:
                    f.write(version_js_content)
                print(f"Updated: {target}")
        else:
            print(f"Skipping (not found): {target}")

    print("Version synchronization complete!")

if __name__ == "__main__":
    sync_version()
