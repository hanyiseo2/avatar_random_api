class AvatarGenerator {
  constructor() {
    this.hair = hair;
    this.face = face;
    this.cloth = cloth;
    this.background = background;
  }

  addHair(hair) {
    this.hair = hair;
  }

  addFace(face) {
    this.face = face;
  }

  addCloth(cloth) {
    this.cloth = cloth;
  }

  addBackground(background) {
    this.background = background;
  }

  generateAvatar() {
    if (this.hair && this.face && this.cloth && this.background) {
      // avatar.svg 만들기

      return avatar;
    } else {
      console.error("Missing components to generate the avatar.");
      return null;
    }
  }
}

// Example usage:
const avatarGenerator = new AvatarGenerator();

// Add components
avatarGenerator.addHair("hair.svg");
avatarGenerator.addFace("face.svg");
avatarGenerator.addCloth("cloth.svg");
avatarGenerator.addBackground("background.svg");

// Generate the avatar
const avatar = avatarGenerator.generateAvatar();

if (avatar) {
  console.log("Generated Avatar:", avatar);
}
