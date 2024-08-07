"""
 this file converts the names of the images from the confluence structure into a easier naming scheme , instead of 'image2022-4-12_14-21-29.png?version=1&modificationDate=1649798490000&cacheVersion=1&api=v2&width=952&height=488'
'image2022-4-12_14-22-14.png?version=1&modificationDate=1649798535000&cacheVersion=1&api=v2&width=335&height=250
we will have image2022-4-12_14-22-14_small.png image2022-4-12_14-22-14_big.png
"""
from pathlib import Path

thumbnails = sorted(Path("all_images/uarizona.atlassian.net/wiki/download/thumbnails").glob("*/*"))

print(thumbnails)

# go through and organize each pair so that we can easily determine which is the smaller image

name_map = {}
for pic in thumbnails:
    if "png" in str(pic):
        name = pic.stem
        key = f"{pic.parent.name}/{name}"
        lst = name_map.get(key,[])
        lst.append(pic)
        name_map[key]=lst

print(name_map)
print([len(name_map[k]) for k in name_map])

for k in name_map:
    images = name_map[k]
    for i,im in enumerate(images):
        target = Path(f"{im.parent}/{im.stem}_{i}.png")
        print(target)
        im.rename(target)
