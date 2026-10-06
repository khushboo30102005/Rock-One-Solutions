import os
from PIL import Image

def process_logo(src_path, dest_path):
    if not os.path.exists(src_path):
        print(f"Not found: {src_path}")
        return
        
    img = Image.open(src_path).convert("RGBA")
    datas = img.getdata()
    
    # 1. Make white/off-white background transparent
    newData = []
    threshold = 230
    for item in datas:
        if item[0] > threshold and item[1] > threshold and item[2] > threshold:
            newData.append((255, 255, 255, 0))
        else:
            newData.append(item)
    img.putdata(newData)
    
    # 2. Crop tightly to bounding box
    bbox = img.getbbox()
    if bbox:
        img = img.crop(bbox)
        
    img.save(dest_path, "PNG")
    print(f"Processed and cropped {dest_path}")

base = r"C:\Users\ARVIND SAINI\.gemini\antigravity\brain\d5009080-8c3c-415d-a7e6-8eec984e640e\.user_uploaded"
# Map uploaded files to their names. Based on the file sizes and order of uploads:
# SSP Group: media_1786214061805.png (Wait, the latest SSP upload is media_1786214061805.png? Actually, let's just use the ones I know)
# I will process the current public/client-logos/ directly, but since they might be corrupted, I'll copy from the uploads.
# Wait, let me just download the ones I copied earlier which I still have in .user_uploaded, OR just process the ones in public/client-logos but re-run crop on them.
# The ones in public/client-logos are the live ones. Let's just process whatever is there.
# But wait, SSP is currently the blue square app icon. I want the screenshot the user uploaded.

# Let's map them from the known sizes:
# media_1786213307173.png - SSP Group (38292 bytes)
# media_1786213307121.png - Mee Auto Parts (12582 bytes)
# media_1786213307118.png - Mee Car Rentals (158314 bytes)

process_logo(os.path.join(base, "media_1786213307173.png"), "public/client-logos/ssp-group.png")
process_logo(os.path.join(base, "media_1786213307121.png"), "public/client-logos/mee-auto-parts.png")
process_logo(os.path.join(base, "media_1786213307118.png"), "public/client-logos/mee-car-rentals.png")
