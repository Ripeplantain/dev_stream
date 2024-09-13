"use client";

import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";
import { CollaborativeEditor } from "../components/CollaborativeEditor";

export default function App() {
  return (
    <LiveblocksProvider publicApiKey={process.env.NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY as string}>
      <RoomProvider id="my-room">
        <ClientSideSuspense fallback={<div>Loading…</div>}>
          <CollaborativeEditor />
        </ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
}