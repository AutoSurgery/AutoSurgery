# AutoSurgery

## Project Description

 Automated surgical tool detection and segmentation of surgical images application using Deep-Learning
## Technical Description

The surgical procedure and instruments are detected using two deep learning models, namely UNet and Yolov5 respectively.Used YOLOv5 for Object detection and U-net architecture for segmentation tasks.

The front-end of the application is built using React JS, which accepts the surgical image and displays the results of the deep learning models. The user can view the instrument for uploaded images.

MongoDB is used as the database to store the Authentication. Node JS is used as the backend framework to handle the communication between the front-end and the database.

## Installation Guide

### Prerequisites

Before installing the project, ensure that you have the following software installed on your machine:

- Node js v16
- git
- VS code

### Steps

1. Clone the project repository:

```bash
git clone https://github.com/AutoSurgery/AutoSurgery.git
```

2. Navigate to the project directory:

```bash
cd AutoSurgery-main
```

3. Install the dependencies for the backend:

```bash
npm install
```

4. Start the backend server:

```bash
npm start
```

5. In a new terminal window, navigate to the project directory and install the dependencies for the frontend:

```bash
cd client
npm install
```

6. Start the frontend server:

```bash
npm start
```

7. Open your web browser and go to `http://localhost:3000` to view the application.

![Login page](https://github.com/AutoSurgery/AutoSurgery/blob/a3fae6f944e274f897a4d1642f289cae46abe4fb/screenshots/1.png "Auth Page")


Note: Make sure that MongoDB url is right is running before starting the backend server and is connected to database
Now you can register yourself if you are not resgistered
.Once you login you can upload your images here
![Dashboard](https://github.com/AutoSurgery/AutoSurgery/blob/a3fae6f944e274f897a4d1642f289cae46abe4fb/screenshots/2.png "DashBoard")
Choose File and click on PREDICT IMAGE
![Imageupload](https://github.com/AutoSurgery/AutoSurgery/blob/a3fae6f944e274f897a4d1642f289cae46abe4fb/screenshots/3.png "Imageupload")
Make sure your Flask Server is turned on
You can now view the predicted tools and the segmented mask and labels
![Predicted Tools](https://github.com/AutoSurgery/AutoSurgery/blob/a3fae6f944e274f897a4d1642f289cae46abe4fb/screenshots/4.png "Predicted Tools")
![Segmented mask](https://github.com/AutoSurgery/AutoSurgery/blob/a3fae6f944e274f897a4d1642f289cae46abe4fb/screenshots/5.png "Segmented mask")

## Contributing

Contributions are welcome and appreciated. To contribute, follow these steps:

1. Fork the repository to your own GitHub account.
2. Clone your forked repository to your local machine.
3. Create a new branch for your changes.
4. Make your changes and commit them to your branch.
5. Push your changes to your forked repository.
6. Open a pull request to the main repository.

## License

This project is licensed under the MIT License. 

## Contact

If you have any questions or comments about the project, please feel free to contact us
