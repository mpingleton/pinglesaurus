# Way Ahead

## Foreword

Change is coming!

## Key Points

- Purpose of Website
- Conversion to TypeScript
- UI Responsivness
- Informational Layout

## Purpose of Website

When I originally developed the website, I simply wanted a dinky little developer portfolio.  It wasn't much at all.  It's become clear to me that I will need the website to do more than what it is currently doing.  This is even more important as I start to establish a greater online presence and form connections with new people.

## Conversion to TypeScript

Nobody writes in vanilla Javascript anymore; it's simply not a good idea.  It leads to error-prone software which is difficult to debug; it's taxing on the mental health.  I have already moved on to TypeScript in all of my other projects, so its time that I do so here as well.  I see it is an investment in my mental health to be quite frank.  

## UI Responsiveness

It's important to create a user interface which is highly and quickly responsive.  Here are a few common themes which will happen in the design of the software:

- Long-running fetches will have a "loading" animation, instead of blocking the UI thread.
- Prefetching of data in the background; perhaps caching.
- Background image will be a low priority download, and will have a background color display while waiting for the download.
- Text content will download first and be displayed quickly.

## Informational Layout

### Header Bar

The layout of the header bar is alright, but the actual links are not as helpful as they should be.  "Mobile" should happen automatically, and "Privacy Policy" should be listed in the bottom of the page.  Here are the links which should be there:

(From left to right)

- Software Projects
- 3D Printing
- Gallery
- Home Icon
- Blog
- Updates
- Contact

The currently active page should also be highlighted.

In addition, the header bar will also have a highlighted message bar at the top, which displays only when there is an urgent message to display.

### Home Page

The home page is where a viewer will land once they first navigate to the www.pinglesaur.us website.  It will have several panels:

- Hello!
- Links
- Tech Stack
- Latest Updates
- Bottom Panel (Copyright, Privacy Policies, Compliance Information)

### Software Projects

This is where all the apps that I work on will be displayed.  It will have an Outlook-style list-content view with the apps on the left and project information on the right.

The information for each app will include: title, description, version, screenshots, relevant updates, development status, and download links.

In addition, it will also contain documentation for both users on how to use the app, and developer documenation (for open source projects) for developers who wish to contribute to these projects.

For projects which are under development, there will also be a development stages and progress bar which indicates the status of development.

### 3D Printing

These will be 3D printing projects page.  Again, Outlook-style list-view deal with projects listed on the left, and individual projects on the right.

It will have the general idea of the project, design pictures, recommended print settings, pictures of the finished product, and download links to the STL file.

### Gallery

For photos.  It will have two ways to view: Outlook-style list-view with Albums listed on the left, then the ability to navgate through the photos of the album.

The second will be all the photos displayed in a scrap-book style in chronological order.

Each picture will have meta data: date taken, description, parent album, relevant projects (and links), relevant updates (and links).

### Blog

These are long-form writing posts about the development process, thinking processes, etc, behind the projects that I build.



### Updates

These are small time-stamped and text-based updates announcing updates to software, projects, etc.  The latest ones will also be listed on the home page.

### Contact

A simple contact form for anyone to submit a small message to me, as well as optionally leave contact information for a reply back.