from PIL import Image, ImageDraw

def glider_gun_icon(size):
  # Define the glider gun pattern
  GLIDER_GUN_PATTERN = [
      (1, 5), (1, 6),
      (2, 5), (2, 6),
      (11, 5), (11, 6), (11, 7),
      (12, 4), (12, 8),
      (13, 3), (13, 9),
      (14, 3), (14, 9), (14, 10),
      (15, 6),
      (16, 4), (16, 8),
      (17, 5), (17, 6), (17, 7),
      (18, 6),
      (21, 3), (21, 4), (21, 5),
      (22, 3), (22, 4), (22, 5),
      (23, 2), (23, 6),
      (25, 1), (25, 2), (25, 6), (25, 7),
      (35, 3), (35, 4),
      (36, 3), (36, 4),
  ]

  # Create a new image with the defined size
  img = Image.new('RGB', (size, size), color='white')

  # Create a drawing context
  draw = ImageDraw.Draw(img)

  # Iterate over the glider gun pattern and draw each cell as a small rectangle
  for x, y in GLIDER_GUN_PATTERN:
      draw.rectangle((x, y, x + 1, y + 1), fill='black')

  # Return the generated image
  return img

# Generate the icon images in different sizes
icon16 = glider_gun_icon(16)
icon32 = glider_gun_icon(32)
icon48 = glider_gun_icon(48)
icon128 = glider_gun_icon(128)

# Save the icon images as PNG files
icon16.save('icon16.png')
icon32.save('icon32.png')
icon48.save('icon48.png')
icon128.save('icon128.png')
