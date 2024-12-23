# AnimeFinder

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Features

- **Navbar**: Navigate easily between Home, Quiz, Recommendations, Contact Us, and Waifu pages.
- **Poll Component**: Participate in anime polls with real-time updates.
- **Anime Slider**: View dynamic slides of top anime recommendations.
- **Sidebar**: Discover additional resources and links.
- **Quiz**: Get personalized anime recommendations based on your answers.
- **Contact Page**: Submit feedback or queries.

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

## **Day 7 Log**

### **Tasks Completed**

- **Quiz Page Enhancements**:
  - Resolved list rendering warning by ensuring each child in a list has a unique `key` prop.
  - Updated quiz functionality to address `HotReload` and state update issues.
  - Improved the `QuizPage` component:
    - Integrated genre-based mapping using `GENRE_IDS`.
    - Created dynamic recommendations using AniList GraphQL API.
    - Styled quiz options and result display to better align with streaming site aesthetics.
    - Implemented error handling for empty recommendations.

- **Recommendations Styling**:
  - Designed results section to keep content visually separated from the navigation bar.
  - Styled recommendations to mimic a streaming platform, ensuring each result is displayed in a clean, user-friendly card format.

### **Challenges and Solutions**

- **Challenge**: 
  - List rendering warning in `QuizPage` component due to missing `key` props.
  - **Solution**: Added unique `key` props for elements in the `recommendations` list and quiz options.

- **Challenge**: 
  - State update error while rendering caused by a conflict between `HotReload` and `QuizPage`.
  - **Solution**: Ensured state updates occur only in appropriate lifecycle stages by wrapping all state modifications in event handlers.

- **Challenge**: 
  - Styling issues where recommendations overlapped the navigation bar.
  - **Solution**: Used CSS adjustments, such as `z-index`, margins, and a grid layout, to confine results within a scrollable container below the navbar.

### **Learnings and Insights**

- Reinforced knowledge of React's `key` prop requirement for dynamically rendered lists.
- Improved understanding of state management in React, especially in addressing errors caused by asynchronous updates.
- Enhanced CSS skills to create streaming-site-inspired layouts and visually appealing UI components.

### **Next Steps**

- Continue working on the quiz page:
  - Refine UI/UX for quiz options and recommendations.
  - Enhance user feedback, including progress indicators and better error messages.
- Begin styling the "Top Anime" page:
  - Ensure proper layout, responsive design, and thematic alignment with the streaming aesthetic.
  - Dynamically fetch and display top anime data from AniList API.

## **Day 8 Log**

### **Tasks Completed**

- **Grid Layout and Card Display**:
  - Implemented a grid layout for the homepage using CSS Grid to organize content in responsive columns.
  - Styled the anime cards with hover effects and dynamic backgrounds to create a visually engaging experience.
  - Adjusted the card layout to ensure it adapts to different screen sizes, ensuring usability across devices.
  
- **Responsive Design**:
  - Ensured the grid layout adjusts based on the screen size, using `@media` queries for mobile, tablet, and desktop views.
  - Styled the main content to fit within a max-width container, with appropriate margins and padding.
  
- **Dynamic Content**:
  - Fetched data for anime cards and displayed it dynamically, ensuring the content loads as expected.
  - Created a fallback for cases where no data is available, improving the overall user experience.

### **Challenges and Solutions**

- **Challenge**: 
  - The grid layout did not display the content correctly on smaller screens.
  - **Solution**: Used `grid-template-columns: repeat(auto-fill, minmax(250px, 1fr))` to ensure cards fill the available space and adjust dynamically based on the screen width.
  
- **Challenge**: 
  - Cards were not centered properly within their grid cells.
  - **Solution**: Applied `justify-items: center` to ensure the cards are centered within the grid layout.

- **Challenge**: 
  - Achieving a consistent card size while keeping the design responsive was tricky.
  - **Solution**: Set a fixed height for cards, and adjusted their content dynamically to fit without breaking the layout.

### **Learnings and Insights**

- Gained a deeper understanding of CSS Grid and its ability to create flexible, responsive layouts.
- Learned how to dynamically adjust grid layouts using `auto-fill` and `minmax` for better control over column sizes.
- Improved skills in responsive design, ensuring components display well on different screen sizes.
  
### **Next Steps**

- Tinker with the grid layout and card styles:
  - Experiment with different grid configurations and card designs for a more polished look.
  - Add more content and refine card hover effects for better interaction feedback.
- Continue enhancing the homepage:
  - Incorporate more dynamic content and ensure all sections are styled consistently.
  - Refine the "Top Anime" page styling to align with the overall aesthetic.

## **Day 9 Log**

### **Tasks Completed**

- **Poll Functionality with Persistent Data**:
  - Implemented a persistent voting system using Redis (via Upstash) to store and retrieve poll data.
  - Configured a backend API to handle poll submissions and retrieve stored votes, ensuring data is saved even after page reloads.
  - Updated the poll options with the final text and ensured users could vote and view results seamlessly.
  
- **Slideshow Fixes**:
  - Resolved issues with broken images in the slideshow by configuring Next.js to support external image sources, such as MyAnimeList's CDN.
  - Implemented a fallback image in case the anime images fail to load.

- **Poll Reset Button**:
  - Added a "Reset Poll" button that appears once the results are shown, allowing users to clear their votes and start over.
  - Implemented state management to track if the poll has been submitted, showing the reset button conditionally.

### **Challenges and Solutions**

- **Challenge**:
  - Redis connection errors (`ECONNREFUSED`) while trying to save votes to the database.
  - **Solution**: Verified Redis configuration, ensured the correct URL and password were used in `.env.local`, and switched to the `ioredis` client, which handles Redis connections more reliably.
  
- **Challenge**:
  - Poll results not being persisted across sessions.
  - **Solution**: Implemented Redis to store and retrieve vote counts, ensuring persistent data for users even after a page refresh.
  
- **Challenge**:
  - Broken images in the slideshow due to an unconfigured external image source.
  - **Solution**: Updated `next.config.js` to allow images from MyAnimeList's CDN and tested with external image URLs to confirm it worked properly.

- **Challenge**:
  - The "Reset Poll" button was not showing up correctly after voting.
  - **Solution**: Used conditional rendering to ensure the reset button appeared only after the poll results were submitted, and added functionality to reset the vote state.

### **Learnings and Insights**

- Gained experience with persistent data storage using Redis and integrating it with Next.js.
- Improved understanding of how to configure external image sources in Next.js and manage assets in a more efficient manner.
- Learned the importance of conditional rendering in React to enhance user experience, particularly in handling UI elements like the reset button.
- Deepened knowledge of managing state with hooks (`useState`, `useEffect`) for dynamic UI interactions like polling and slideshow updates.

### **Next Steps**

- Continue to refine the poll system:
  - Add validation for duplicate votes and prevent users from voting more than once.
  - Improve UI/UX of the voting process to make it more engaging (e.g., animations for submitting votes or viewing results).
- Further optimize the slideshow:
  - Add functionality for manual image navigation (e.g., "next" and "previous" buttons).
  - Explore adding more features like captions or more detailed images.
- Tinker with the poll reset functionality:
  - Allow users to reset only the poll results or reset the poll entirely, including votes and UI.
  - Improve backend logic to handle resetting data in Redis.
