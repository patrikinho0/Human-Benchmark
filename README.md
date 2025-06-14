<h1 align="center">Human-Benchmark 🚀</h1>

<p align="center">
  A web application designed to test and improve your cognitive abilities through a series of engaging challenges. Track your progress, compete for high scores, and unlock your brain's full potential!
</p>

---

## ✨ Features

* **Reaction Time Game:** Test and improve your reaction speed with a classic green-light challenge. 🚦
* **User Authentication:** Securely register and log in to track your personal performance. 🔒
* **Personal High Scores:** Your best reaction times are saved and displayed, encouraging continuous improvement. 🏆
* **Firebase Integration:** Powered by **Firebase Firestore** for robust data storage (scores) and **Firebase Authentication** for secure user management. 🔥
* **Responsive Design:** Enjoy a seamless experience across desktop and mobile devices. 📱💻
* **Vercel Deployment Ready:** Optimized for easy and continuous deployment on the Vercel platform. ☁️

---

## 🔮 Future Enhancements

We have exciting plans to expand the Human Benchmark experience! Upcoming features include:

* **Verbal Memory Game:** Challenge your ability to remember words. 📖
* **Number Memory Game:** Test your capacity to recall sequences of numbers. 🔢
* **Visual Memory Game:** Improve your visual recall and pattern recognition. 🧠
* **Aim Trainer:** Enhance your precision and targeting skills. 🎯
* **Leaderboards:** Compete with other users globally to see who has the sharpest mind. 🥇
* **Progress Tracking:** Visualize your performance trends over time. 📈

---

## 🛠️ Technologies Used

* **React:** A JavaScript library for building user interfaces. ⚛️
* **Firebase:** Google's powerful platform for building web and mobile applications:
    * **Firestore:** NoSQL cloud database for storing user scores and other data. 🗄️
    * **Authentication:** Secure user sign-up and sign-in. ✅
* **React Router DOM:** For declarative routing within the application. 🧭
* **Font Awesome:** A popular icon library integrated with React for scalable vector icons. 🌟
* **CSS:** For styling and layout, including responsive design. 🎨

---

## 🏃 Getting Started

Follow these steps to get your project up and running on your local machine.

### Prerequisites

Make sure you have Node.js and npm (or Yarn) installed on your system.

* [Node.js](https://nodejs.org/) (which includes npm)
* (Optional) [Yarn](https://yarnpkg.com/)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/patrikinho0/Human-Benchmark.git
    cd Human-Benchmark
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Set up Firebase Configuration:**
    This project uses Firebase for backend services. You'll need to create your own Firebase project and configure it.

    * Go to the [Firebase Console](https://console.firebase.google.com/).
    * Create a new project.
    * Add a new web app to your project.
    * When prompted, copy your Firebase configuration object (it will look something like `apiKey: "..."`).

4.  **Create a `.env.local` file:**
    In the root of your project directory, create a file named `.env.local`. This file will store your Firebase configuration securely and will **not** be committed to Git.

    ```
    REACT_APP_FIREBASE_API_KEY=YOUR_FIREBASE_API_KEY
    REACT_APP_FIREBASE_AUTH_DOMAIN=YOUR_FIREBASE_AUTH_DOMAIN
    REACT_APP_FIREBASE_PROJECT_ID=YOUR_FIREBASE_PROJECT_ID
    REACT_APP_FIREBASE_STORAGE_BUCKET=YOUR_FIREBASE_STORAGE_BUCKET
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID=YOUR_FIREBASE_MESSAGING_SENDER_ID
    REACT_APP_FIREBASE_APP_ID=YOUR_FIREBASE_APP_ID
    # REACT_APP_FIREBASE_MEASUREMENT_ID=YOUR_FIREBASE_MEASUREMENT_ID (if applicable)
    ```
    Replace the `YOUR_FIREBASE_...` placeholders with your actual values from the Firebase Console.

### Running the Application

To start the development server:

```bash
npm start
```
# or
```bash
yarn start
```
This will open the application in your browser at http://localhost:3000 (or another available port).

## ☁️ Deployment
Check out the live demo of Human Benchmark here: [human-benchmark-tau.vercel.app](https://human-benchmark-tau.vercel.app)

## 🙏 Contributing
- Contributions are welcome! If you have suggestions for improvements or new features, please feel free to open an issue or submit a pull request. 🤝

## ❓ Questions or Feedback?
- 📧 Reach out to me at [patryk61222@gmail.com]
- 🐛 Or open an issue

<p align="center"> Made with ❤️ by <b>patrikinho</b> </p>