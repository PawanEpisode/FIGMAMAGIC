This is a FIGMA APP [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

- Initialize the Application using Nextjs, Tppescript, Tailwind CSS , Eslint and integrated with github remote repository.
- We need canvas to do all the work, So [Fabric.js](https://www.npmjs.com/package/fabric) framework will be helpful to work with HTML5 canvas element.
- A package called [uuid](https://www.npmjs.com/package/uuid) which will be used to generate unique ids.Because each of the elements in the app must have its own unique ids.
- Another package called [liveblocks/react](https://liveblocks.io/docs/get-started/react) will enable to implement real-time collaboration features into our(any) app.
- Sign up on live blocks , created a project. Added the API key to environment file.
- installed fabric, uuid,  @liveblocks/client, @liveblocks/react .
 ```bash
npm install @liveblocks/client @liveblocks/react fabric uuid
```
- Initialize the liveblocks.config.ts file using :- 
 ```bash
npx create-liveblocks-app@latest --init --framework react
```
- We will be using React Suspense Hooks and yes for typescript. 
- In the liveblocks config file, added the public key from the .env.local file 
- Created Three components Room.tsx, Collaborative.tsx and page.tsx .
- Liveblocks uses the concept of rooms, separate virtual spaces where collaborate. To create a real-time experience, multiple users must be connected to the same room. 
- After creating your room file, it’s time to join it. Import your room into your page.tsx file, and place your collaborative app components inside it.
- Now that we’re connected to a room, we can start using the Liveblocks hooks. The first we’ll add is useOthers, a hook that provides information about which other users are connected to the room.
- Note :- By default, Liveblocks is configured to work without an authentication endpoint where everyone automatically has access to rooms.
- Now can can see multiple users real-time using the application
- Install and setup shadcn UI library using nextjs.
- File structure & shadcn ui setup with other folders like lib, public, hooks, types , constants etc. for asset and code management.
-  Implemented Live Cursors for the canvas board . Page.tsx, Live.tsx, Cursor.tsx, CursorChat.tsx, LiveCursors.tsx etc. Real-time communication established !!!
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
```


## Learn More



## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
