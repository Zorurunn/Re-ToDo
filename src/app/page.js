"use client";
import { createContext, useMemo, useState } from "react";
import { Container } from "@/components/Container";
import { ToDoApp } from "@/components/ToDoApp";

export default function Home() {
  return (
    <Container>
      <ToDoApp />
    </Container>
  );
}
