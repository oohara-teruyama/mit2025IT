from PIL import Image, ImageDraw

# Create a doodle-style cat image
def create_doodle_cat_image():
    # Create a blank image with white background
    img = Image.new('RGB', (512, 512), color='white')
    d = ImageDraw.Draw(img)
    
    # Draw a simple doodle-style cat
    d.ellipse((150, 150, 350, 350), outline='black', width=5)  # Head
    d.ellipse((200, 200, 220, 220), outline='black', width=5)  # Left eye
    d.ellipse((280, 200, 300, 220), outline='black', width=5)  # Right eye
    d.line((250, 250, 250, 300), fill='black', width=5)        # Nose to mouth
    d.line((230, 270, 270, 270), fill='black', width=5)        # Mouth
    d.line((150, 150, 180, 120), fill='black', width=5)        # Left ear
    d.line((180, 120, 210, 150), fill='black', width=5)        # Left ear
    d.line((350, 150, 320, 120), fill='black', width=5)        # Right ear
    d.line((320, 120, 290, 150), fill='black', width=5)        # Right ear
    d.line((150, 350, 100, 400), fill='black', width=5)        # Left whisker
    d.line((150, 350, 100, 350), fill='black', width=5)        # Left whisker
    d.line((150, 350, 100, 300), fill='black', width=5)        # Left whisker
    d.line((350, 350, 400, 400), fill='black', width=5)        # Right whisker
    d.line((350, 350, 400, 350), fill='black', width=5)        # Right whisker
    d.line((350, 350, 400, 300), fill='black', width=5)        # Right whisker
    
    return img

# Save the doodle cat image in multiple sizes and convert to .ico
def save_favicon(image, filename):
    # Define the sizes for the favicon
    sizes = [(16, 16), (32, 32), (48, 48), (64, 64), (128, 128), (256, 256)]
    
    # Save the image as .ico with multiple sizes
    image.save(filename, format='ICO', sizes=sizes)

# Create the doodle cat image
doodle_cat_image = create_doodle_cat_image()

# Save the image as PNG
doodle_cat_image.save('doodle_cat.png')

# Save the image as favicon.ico
save_favicon(doodle_cat_image, 'favicon.ico')

print("Doodle-style cat image created and saved as 'doodle_cat.png'.")
print("Favicon created and saved as 'favicon.ico'.")

