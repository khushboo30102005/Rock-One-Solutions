from PIL import Image

def make_white_transparent(image_path):
    img = Image.open(image_path).convert("RGBA")
    datas = img.getdata()

    newData = []
    # threshold for considering a pixel "white"
    threshold = 240
    for item in datas:
        if item[0] > threshold and item[1] > threshold and item[2] > threshold:
            newData.append((255, 255, 255, 0))
        else:
            newData.append(item)

    img.putdata(newData)
    img.save(image_path, "PNG")
    print(f"Processed {image_path}")

make_white_transparent("public/client-logos/ssp-group.png")
make_white_transparent("public/client-logos/mee-auto-parts.png")
make_white_transparent("public/client-logos/mee-car-rentals.png")
