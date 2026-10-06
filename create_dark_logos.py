from PIL import Image
import colorsys

def make_dark_bg_friendly(src_path, dest_path):
    """
    Convert a logo for dark backgrounds:
    - White/light background → transparent
    - Dark text (grays, dark browns, dark blues) → white
    - Keep colorful elements (orange, bright colors) as-is
    """
    img = Image.open(src_path).convert("RGBA")
    pixels = list(img.getdata())
    new_pixels = []
    
    for r, g, b, a in pixels:
        if a < 10:
            new_pixels.append((r, g, b, a))
            continue
            
        # Make white/near-white pixels transparent
        if r > 230 and g > 230 and b > 230:
            new_pixels.append((255, 255, 255, 0))
            continue
        
        # Check if pixel is "colorful" (saturated) vs "dark/gray"
        # Convert to HSV to check saturation
        h, s, v = colorsys.rgb_to_hsv(r/255.0, g/255.0, b/255.0)
        
        # If saturation is low (grays, dark browns, blacks) → make white
        # If saturation is high (orange, blue accents) → keep original color
        if s < 0.25 and v < 0.7:
            # Dark gray/black text → make white
            new_pixels.append((255, 255, 255, a))
        elif s < 0.35 and v < 0.45:
            # Very dark semi-saturated (dark brown text in SSP) → make white
            new_pixels.append((255, 255, 255, a))
        else:
            # Colorful pixel → keep as-is
            new_pixels.append((r, g, b, a))
    
    img.putdata(new_pixels)
    
    # Crop to content
    bbox = img.getbbox()
    if bbox:
        img = img.crop(bbox)
    
    img.save(dest_path, "PNG")
    print(f"Created dark-bg version: {dest_path} ({img.size[0]}x{img.size[1]})")

base = r"C:\Users\ARVIND SAINI\.gemini\antigravity\brain\d5009080-8c3c-415d-a7e6-8eec984e640e\.user_uploaded"

# SSP Group (media_1786212306234.png) - dark brown text, orange flame
make_dark_bg_friendly(f"{base}\\media_1786212306234.png", "public/client-logos/ssp-group.png")

# Mee Auto Parts (media_1786212475571.png) - dark blue/gray text, orange accents
make_dark_bg_friendly(f"{base}\\media_1786212475571.png", "public/client-logos/mee-auto-parts.png")

# Mee Car Rentals (media_1786212436944.png) - dark blue text, orange car icon
make_dark_bg_friendly(f"{base}\\media_1786212436944.png", "public/client-logos/mee-car-rentals.png")
