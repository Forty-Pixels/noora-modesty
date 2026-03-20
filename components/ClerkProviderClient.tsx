"use client";

import { ClerkProvider } from "@clerk/nextjs";
import React from "react";

export default function ClerkProviderClient({ children }: { children: React.ReactNode }) {
    const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

    if (!publishableKey) {
        return <>{children}</>;
    }

    return (
        <ClerkProvider publishableKey={publishableKey}>
            {children}
        </ClerkProvider>
    );
}
