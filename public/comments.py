import os
import json
import re

path = "/assets/img/clients/"
image_paths = []
for files in os.walk(path):
    # Iterate through all files in the directory
    for file in files:
        # Check if file is an image
        if file.endswith(".jpg") or file.endswith(".png"):
            # Get full path of image
            # image_path = os.path.join(root, file)
            # Add image path and directory names to list
            image_paths.append({"directory": file.split(
                r"(|\)")[-1]})
        image_paths_json = json.dumps(image_paths)
with open('portfolio.json', 'w') as f:
    f.write(image_paths_json)
print(image_paths_json)
