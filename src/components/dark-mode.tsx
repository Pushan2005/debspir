"use client";

import { useTheme } from "next-themes";
import * as React from "react";

export default function DarkMode() {
    const { setTheme } = useTheme();
    setTheme("dark");
    return <></>;
}
