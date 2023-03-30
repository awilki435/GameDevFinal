# if you need to install pillow run following code in command line
# python3 -m pip install --upgrade pip
# python3 -m pip install --upgrade Pillow

from PIL import Image
from os import mkdir
import os

#open sprite sheet
sheet = Image.open(r'D:\GitHubRepositories\GameDevFinal\assets\sounds\images\babaSheet.png')


# -------------------------------------------------------------------
#
# Extracts a 3 state, vertically oriented, animated sprite
#
# -------------------------------------------------------------------
def extractSprite3(filename, left, top):
  size = 24 # everything is 24 pixels in size
  posX = size * left
  posY = size * top

  for i in range(3):
    sprite = sheet.crop((posX, posY + i * size, posX + size, posY + (i + 1) * size))
    #posY += size
    sprite.save(f'sprite_{i}.png')
  
  spriteSheet = Image.new('RGBA', (3 * size, size))
  for i in range(3):
    spriteSheet.paste(Image.open(f'sprite_{i}.png'), ((i * size, 0)))
  spriteSheet.save(filename)


# -------------------------------------------------------------------
#
# Extract all the object types required for the CS 5410 game
#
# -------------------------------------------------------------------
extractSprite3('water.png', 15, 54)
extractSprite3('lava.png', 16, 57)
extractSprite3('hedge.png', 15, 51)
extractSprite3('wall.png', 19, 21)
extractSprite3('rock.png', 15, 21)
extractSprite3('floor.png', 15, 45)
extractSprite3('flowers.png', 14, 24)
extractSprite3('grass.png', 10, 24)
extractSprite3('flag.png', 6, 21)

# -------------------------------------------------------------------
#
# Extract all the word types required for the CS 5410 game
#
# -------------------------------------------------------------------
extractSprite3('word-wall.png', 27, 33)
extractSprite3('word-rock.png', 11, 33)
extractSprite3('word-flag.png', 1, 30)
extractSprite3('word-baba.png', 6, 27)
extractSprite3('word-is.png', 18, 30)
extractSprite3('word-stop.png', 12, 42)
extractSprite3('word-push.png', 2, 42)
extractSprite3('word-lava.png', 24, 30)
extractSprite3('word-water.png', 28, 33)
extractSprite3('word-you.png', 20, 42)
extractSprite3('word-win.png', 17, 42)
extractSprite3('word-sink.png', 9, 42)
extractSprite3('word-kill.png', 5, 39)