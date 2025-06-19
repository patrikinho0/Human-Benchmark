<h1 align="center"> Human-Benchmark 🚀</h1>

<p align="center">
  A web application designed to test and improve your cognitive abilities through a series of engaging challenges. Track your progress, compete for high scores, and unlock your brain's full potential!
</p>

---

## ✨ Key Features

Here's what **Human-Benchmark** offers to help you sharpen your mind:

* **Reaction Time Game:** Put your reflexes to the test with a classic green-light challenge. **Improve your speed and accuracy** every try! 🚦
* **User Authentication:** Securely **register and log in** to personalize your experience and track your performance over time. 🔒
* **Personal High Scores:** Your best reaction times are **automatically saved and prominently displayed**, motivating you for continuous improvement. 🏆
* **Firebase Integration:** Built with **Firebase Firestore** for robust and scalable data storage (scores) and **Firebase Authentication** for secure user management. 🔥
* **Responsive Design:** Enjoy a **seamless and optimized experience** whether you're on a desktop, tablet, or mobile device. 📱💻
* **Vercel Deployment Ready:** Optimized for **easy and continuous deployment** on the Vercel platform, ensuring a smooth development and deployment workflow. ☁️

---

## 🔮 Upcoming Enhancements

We're constantly working to expand the **Human-Benchmark** experience. Here's a glimpse of what's coming next:

* **Verbal Memory Game:** Challenge your ability to remember sequences of words and boost your linguistic recall. 📖
* **Number Memory Game:** Test your capacity to recall complex sequences of numbers and enhance your numerical memory. 🔢
* **Visual Memory Game:** Improve your visual recall and pattern recognition skills with engaging visual challenges. 🧠
* **Aim Trainer:** Enhance your precision and targeting skills, perfect for gamers and anyone looking to improve hand-eye coordination. 🎯
* **Global Leaderboards:** Compete with other users worldwide and see how your cognitive abilities stack up against the best. 🥇
* **Detailed Progress Tracking:** Visualize your performance trends over time with insightful graphs and statistics, helping you monitor your cognitive growth. 📈

---

## 🛠️ Technologies & Tools

**Human-Benchmark** is built with modern and robust technologies:

* **React:** The powerful JavaScript library for building dynamic and interactive user interfaces. ⚛️
* **Firebase:** Google's comprehensive platform for web and mobile application development, providing:
    * **Firestore:** A flexible, scalable NoSQL cloud database for storing user scores and application data. 🗄️
    * **Authentication:** Secure and easy-to-implement user sign-up and sign-in functionalities. ✅
* **React Router DOM:** For efficient and declarative routing within the single-page application. 🧭
* **Font Awesome:** An industry-standard icon library, seamlessly integrated with React for scalable vector icons and a polished UI. 🌟
* **CSS:** Utilized for creating a clean, intuitive, and responsive user interface. 🎨

---

## 🏃 Getting Started

Follow these simple steps to get **Human-Benchmark** up and running on your local machine.

### Prerequisites

Before you begin, ensure you have **Node.js** and **npm** (or Yarn) installed on your system.

* [Node.js](https://nodejs.org/) (includes npm)
* (Optional) [Yarn](https://yarnpkg.com/)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/patrikinho0/Human-Benchmark.git](https://github.com/patrikinho0/Human-Benchmark.git)
    ```
    
    ```bash
    cd Human-Benchmark
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```
    # or
    ```bash
    yarn install
    ```

4.  **Set up Firebase Configuration:**
    This project relies on Firebase for its backend services. You'll need to create your own Firebase project and configure it.

    * Navigate to the [Firebase Console](https://console.firebase.google.com/).
    * Create a **new project**.
    * Add a **new web app** to your project.
    * During the setup, copy your Firebase configuration object (it will look something like `apiKey: "..."`).

5.  **Create a `.env.local` file:**
    In the root of your project directory, create a file named `.env.local`. This file will securely store your Firebase configuration and is **excluded from version control** (it won't be committed to Git).

    ```
    REACT_APP_FIREBASE_API_KEY=YOUR_FIREBASE_API_KEY
    REACT_APP_FIREBASE_AUTH_DOMAIN=YOUR_FIREBASE_AUTH_DOMAIN
    REACT_APP_FIREBASE_PROJECT_ID=YOUR_FIREBASE_PROJECT_ID
    REACT_APP_FIREBASE_STORAGE_BUCKET=YOUR_FIREBASE_STORAGE_BUCKET
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID=YOUR_FIREBASE_MESSAGING_SENDER_ID
    REACT_APP_FIREBASE_APP_ID=YOUR_FIREBASE_APP_ID
    # REACT_APP_FIREBASE_MEASUREMENT_ID=YOUR_FIREBASE_MEASUREMENT_ID (if applicable)
    ```
    **Replace** the `YOUR_FIREBASE_...` placeholders with your actual values obtained from the Firebase Console.

### Running the Application

To start the development server and run the application locally:

```bash
npm start
```
# or
```bash
yarn start
```
This will open the application in your browser at http://localhost:3000 (or another available port).

## ☁️ Deployment
Experience Human-Benchmark live! Check out the deployed application here: [human-benchmark-tau.vercel.app](https://human-benchmark-tau.vercel.app)

## 🙏 Contributing
Contributions are highly encouraged and always welcome! If you have suggestions for improvements, new features, or find any bugs, please feel free to:
- Open an issue
- Submit a pull request 🤝

## ❓ Questions or Feedback?
We'd love to hear from you!
- 📧 Email: Feel free to reach out to me directly at [patryk61222@gmail.com]
- 🐛 Issues: Alternatively, you can always open an issue on this repository for any questions or feedback.

<p align="center"> Made with ❤️ by <b>patrikinho</b> </p>
