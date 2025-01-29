rm -rf lang/*
wget -O web.zip https://git.eaglercraft.rip/eaglercraft/eaglercraft-builds/raw/branch/main/EaglercraftX_1.8_Web.zip
unzip -o web.zip
rm -rf web.zip
rm -rf index.html
cp templates/* .
wget -O binarytools.jar https://github.com/lax1dude/eagler-binary-tools/raw/refs/heads/main/EaglerBinaryTools.jar
java -jar binarytools.jar epkdecompiler assets.epk assets
wget -O pack.zip https://github.com/colbster937/Netherite4Eagler/releases/download/latest/Netherite4Eagler.zip
unzip -d pack pack.zip
cp -rf pack/assets/* assets/assets
java -jar binarytools.jar epkcompiler assets assets.epk
rm -rf pack
rm -rf pack.zip
rm -rf assets
rm -rf binarytools.jar