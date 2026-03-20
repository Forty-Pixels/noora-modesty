"use client";

import { useAuth as useClerkAuth, useUser as useClerkUser } from "@clerk/nextjs";

const hasClerkKey = !!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

export const useSafeAuth = () => {
    if (!hasClerkKey) {
        return {
            isSignedIn: false,
            userId: null,
            sessionId: null,
            getToken: async () => null,
            signOut: async () => { },
        };
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useClerkAuth();
};

export const useSafeUser = () => {
    if (!hasClerkKey) {
        return {
            isSignedIn: false,
            user: null,
            isLoaded: true,
        };
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useClerkUser();
};
