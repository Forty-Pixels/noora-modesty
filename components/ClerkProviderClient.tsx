"use client";

import { ClerkProvider } from "@clerk/nextjs";
import React from "react";

export default function ClerkProviderClient({ children }: { children: React.ReactNode }) {
    return (
        <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY || "pk_test_YWN0aXZlLW1vb3NlLTY3LmNsZXJrLmFjY291bnRzLmRldiQ"}>
            {children}
        </ClerkProvider>
    );
}
