<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://wefunder-hw.s3.us-east-2.amazonaws.com/ryfunder.png" width="100" />
  </a>
</p>

# The Challenge

Build a tool that allows a user to upload their pitch deck and display it on a web page.

At a minimum, you should have:

1. A web page that allows a user to upload a file as a PDF. Bonus points for supporting PPT and other formats too.
2. A backend that takes the uploaded file and generates an image for each slide.
3. A web page that displays the deck using the image of each slide, like on the Wefunder profile page.

---

### There are two ways to view this repo

1. Live at [http://wefunder-hw.us-east-2.elasticbeanstalk.com/](http://wefunder-hw.us-east-2.elasticbeanstalk.com/) (**Recommended**)

   1. [Home](http://wefunder-hw.us-east-2.elasticbeanstalk.com/)
   2. [Raise Money](http://wefunder-hw.us-east-2.elasticbeanstalk.com/raise)
   3. [View all companies currently raising](http://wefunder-hw.us-east-2.elasticbeanstalk.com/raise/all)
   4. [View one company currently raising (Airbnb)](http://wefunder-hw.us-east-2.elasticbeanstalk.com/raise/6175ff9ad35dc64343be0a7f)

2. Self setup

---

## Self setup

- Self setup instructions

  ## 🚦 Getting Started

  1. **Download necessary software**

     A few types of software are needed for the conversion of different filetypes. Below are instructions for installing them on Ubuntu

  1. Node >= 12.x

     ```bash
     sudo apt install nodejs
     sudo apt install npm
     ```

  1. graphicsmagick

     ```bash
     sudo apt install graphicsmagick
     ```

  1. ghostscript

     ```bash
     sudo apt install ghostscript
     ```

  1. LibreOffice

     Note the location of where this is installed as it is needed later in the environment setup

     ```bash
     sudo apt install libreoffice
     ```

  1. **Clone the repository**

     ```bash
     git clone https://github.com/Ryanjso/wefunder-hw
     ```

  1. **Set up environment variables**

     In the server folder is a file called `.env.example`. This holds all of the necessary environment variables to create this project.

     Copy the file once, name the new file .env, and add the necessary values. Do **not** commit this file to the Github repo

     ```bash
     # In .env
     # default is: mongodb://localhost:27017/{databaseName}
     # Database. if you use MongoAtlas they will provide a connection string
     MONGO_CONNECTION=

     # AWS S3 Info
     AWS_ACCESS_ID=
     AWS_ACCESS_SECRET=
     AWS_BUCKET_NAME=

     # LibreOffice
     # The location of Libre Office on your device
     # Ex: /Applications/LibreOffice.app/Contents/MacOS/soffice
     SOFFICE_LOCATION=
     ```

  1. **Install the npm modules**

     ```bash
     # Inside the server directory
     npm install
     ```

     ```bash
     # Inside the angular-wefunder-hw directory
     npm install
     ```

     Run server/development environment:

     ```bash
     # inside the server directory
     npm start
     ```

  1. **View server**

     (It will likely run on this specified port unless it is in use). Visit [http://localhost:3000/](http://localhost:3000/) to view your site

---

# 😃 Developer

### Ryan Soderberg

Email: ryanjsoderberg@gmail.com
