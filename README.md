# AnimeFinder

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Features

- **Navbar**: Navigate easily between Home, Quiz, Recommendations, Contact Us, and Waifu pages.
- **Poll Component**: Participate in anime polls with real-time updates.
- **Anime Slider**: View dynamic slides of top anime recommendations.
- **Sidebar**: Discover additional resources and links.
- **Quiz**: Get personalized anime recommendations based on your answers.
- **Contact Page**: Submit feedback or queries.
- **Waifu Gallery**: Browse categorized anime character images.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
Open http://localhost:3000 with your browser to see the result.

You can start editing the page by modifying app/page.js. The page auto-updates as you edit the file.

This project uses next/font to automatically optimize and load Geist, a new font family for Vercel.

Learn More

To learn more about Next.js, take a look at the following resources:

Next.js Documentation - learn about Next.js features and API.
Learn Next.js - an interactive Next.js tutorial.
You can check out the Next.js GitHub repository - your feedback and contributions are welcome!

Deploy on Vercel

The easiest way to deploy your Next.js app is to use the Vercel Platform from the creators of Next.js.

Check out our Next.js deployment documentation for more details.

# **Daily Logs**

## __**Day 1 Log**__

### __**Tasks Completed**__
- Initialized the Next.js project using `create-next-app`.
- Brainstormed ideas for the website layout, features, and functionality.
- Drew up wireframes for the home/splash page.
- Learned about the benefits of Next.js, including its server-side rendering capabilities.
- Researched and began understanding Firebase for authentication.

### __**Challenges and Solutions**__
- **Challenge**: Limited familiarity with Next.js features and setup.
  **Solution**: Spent time reviewing [Next.js Documentation](https://nextjs.org/docs) to understand its core concepts and capabilities.
- **Challenge**: Unsure how Firebase authentication integrates with Next.js.
  **Solution**: Found and studied tutorials specific to Firebase integration in Next.js ([Firebase Docs](https://firebase.google.com/docs)).

### __**Learnings and Insights**__
- Learned about Next.js features, such as server-side rendering and static site generation, and their impact on performance and SEO.
- Discovered how Firebase authentication can streamline the user login process and improve security.
- The wireframe process helped visualize the site structure and clarified the placement of components.

### __**Next Steps**__
- Begin building the website by creating the Navbar and Sidebar components.
- Implement a basic layout for the home page.
- Integrate Firebase into the project to set up user authentication.

---

## __**Day 2 Log**__

### __**Tasks Completed**__
- Created the Navbar component with navigation links for Home, Quiz, Recommendations, Contact Us, and Waifu pages.
- Configured the root layout.js with `<html>` and `<body>` tags for proper rendering.
- Added global styles via `globals.css`.
- Implemented the basic structure of the homepage, including the Navbar, Poll, and Sidebar components.

### __**Challenges and Solutions**__
- **Challenge**: Missing `<html>` and `<body>` tags in the root layout.
  **Solution**: Added these tags in layout.js to comply with Next.js requirements.
- **Challenge**: Errors with Link components in the Navbar due to incorrect prop usage.
  **Solution**: Replaced the `to` prop with `href` as required by Next.js Link components.
- **Challenge**: Import issues with `globals.css`.
  **Solution**: Corrected the file path and successfully imported the stylesheet.

### __**Learnings and Insights**__
- Learned about structuring the `root layout.js` file and the significance of wrapping all content with `<html>` and `<body>` in Next.js.
- Improved understanding of the differences between `react-router-dom` and Next.js `Link` components.
- Gained insights into managing global styles with `globals.css`.

### __**Next Steps**__
- Develop and integrate the Poll component.
- Build the AnimeSlider component to showcase featured anime dynamically.
- Create the Sidebar for additional navigational elements.
- Plan and draft the Quiz and Recommendations pages.

---

## __**Day 3 Log**__

### __**Tasks Completed**__
- Refactored and implemented the AnimeSlider component.
- Integrated the Jikan API to fetch and display top anime dynamically.
- Displayed images, titles, and navigation buttons.
- Styled the Anime Slider in `animeSlider.css`:
  - Ensured a responsive and user-friendly design.
  - Positioned the navigation buttons correctly below the slideshow.
  - Fixed layout issues with unwanted scrollbars in the slideshow container.
  - Cleaned up styles to maintain separation between `global.css` and `animeSlider.css`.

### __**Challenges and Solutions**__
- **Challenge**: Buttons were misaligned and overlapped the slides.
  **Solution**: Updated the layout in `animeSlider.css` to position buttons below the slideshow with proper alignment.
- **Challenge**: Scrollbars appeared in the slider container.
  **Solution**: Adjusted styles to remove excess overflow and ensure a clean display.
- **Challenge**: Properly integrating and fetching data from the Jikan API.
  **Solution**: Researched API documentation and wrote efficient fetch logic for dynamic rendering.

### __**Learnings and Insights**__
- Deepened understanding of dynamic component rendering with API integration in Next.js.
- Improved skills in separating global and component-specific styles for better maintainability.
- Learned how to handle edge cases for slideshow navigation (e.g., disabling buttons when at the beginning or end).

### __**Next Steps**__
- Enhance the Anime Slider:
  - Add animation transitions for smoother navigation.
- Begin work on the "Top Anime Poll" component.
- Plan and draft layouts for the remaining pages: Quiz, Recommendations, Contact, and Waifu Gallery.

---

## __**Day 4 Log**__

### __**Tasks Completed**__
- Developed the Poll component to allow users to participate in anime polls with real-time updates.
- Implemented logic to handle vote selection and submission.
- Styled the Poll component to display results in a bar chart format with dynamic width based on vote count.
- Added validation to ensure users select an option before submitting the poll.
- Improved UI with better text visibility inside the poll bar (black text inside the blue bar).
- Refactored the `Poll.js` and `poll.css` files to clean up and streamline the component.

### __**Challenges and Solutions**__
- **Challenge**: Handling vote submission and ensuring that only one vote can be cast per user.
  **Solution**: Used state management to track selected options and ensured votes cannot be changed once submitted.
- **Challenge**: Dynamic styling for the poll bars and adjusting text color inside the blue bars for readability.
  **Solution**: Used `text-black` class to change the text color inside the bars to black, making the text legible without the need for background color contrast.

### __**Learnings and Insights**__
- Gained further experience in handling state updates with React and Next.js.
- Learned how to dynamically adjust UI elements based on user input and conditional rendering.
- Understood the importance of accessibility and ensuring text is visible against varying background colors.

### __**Next Steps**__
- Start working on the Quiz page layout and functionality.
- Build the Recommendations page, integrating anime data from an API.
- Work on the Contact page to enable user feedback submission.

---
```

## \***\*Day 5 Log\*\***

### \***\*Tasks Completed\*\***

- Enhanced the Quiz page functionality to handle user answers dynamically.
- Updated the "Get Results" button to hide quiz cards and display recommendations.
- Implemented logic to display recommendations based on selected genres.
- Added a "Load More" button to fetch additional recommendations.
- Created a "Reset Quiz" button to restart the quiz, clear results, and hide popups.
- Styled the popup to improve visibility and ensure it only shows once if no recommendations are found.

### \***\*Challenges and Solutions\*\***

- **Challenge**: Ensuring the quiz cards disappeared after clicking "Get Results."
  - **Solution**: Added a `quizFinished` state to toggle visibility of the quiz and results sections.
- **Challenge**: Popup showing twice after submission.
  - **Solution**: Adjusted the logic to prevent duplicate triggers and ensured the popup only appears when necessary.
- **Challenge**: Managing state and ensuring smooth transitions between quiz questions, results, and popups.
  - **Solution**: Streamlined state updates and implemented conditional rendering based on the quiz status.

### \***\*Learnings and Insights\*\***

- Improved understanding of state management and conditional rendering in React.
- Reinforced the importance of user feedback mechanisms like popups and alerts for seamless UX.
- Learned how to create reusable logic for showing/hiding UI elements based on component state.

### \***\*Next Steps\*\***

- Implement the contact form with functional email submission.
- Start exploring the Magic Link authentication feature for user sign-ins.
- Continue refining styles and improving overall UI/UX consistency.

## \***\*Day 6 Log\*\***

### \***\*Tasks Completed\*\***

- Integrated Resend API to implement functional email submission for the contact form.
- Set up server-side email handling with a custom API route in Next.js (`/api/email`).
- Enhanced contact form validation and feedback, ensuring a smoother user experience.
- Tested email functionality with successful email delivery to the specified address.
- Styled the contact form and popup for better user interaction and visibility.

### \***\*Challenges and Solutions\*\***

- **Challenge**: API request returning a 404 error for the `/api/email` route.
  - **Solution**: Verified file structure in the `src/app/api/email/route.js` and ensured proper route configuration. Restarted the server to apply changes.
- **Challenge**: Ensuring email sending functionality works properly and securely using the Resend API.
  - **Solution**: Used environment variables to securely store the Resend API key and confirmed the correct email format for the "from" field.
- **Challenge**: Ensuring proper error handling and user feedback in case of email failure.
  - **Solution**: Implemented error handling in the API route to log errors and return meaningful responses to the frontend.

### \***\*Learnings and Insights\*\***

- Gained hands-on experience with email APIs and integrating external services like Resend.
- Strengthened knowledge of handling API requests and managing sensitive information securely in environment variables.
- Improved ability to debug network-related issues by checking route paths and server configurations.

### \***\*Next Steps\*\***

- Test the contact form thoroughly to ensure it works across different environments (development, staging, production).
- Continue refining the UI/UX for the contact form and popup.
- Begin implementing Magic Link authentication for the contact form submission (if applicable).
- Review overall error handling and implement any necessary improvements.
