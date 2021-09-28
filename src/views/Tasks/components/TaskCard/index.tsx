import React from 'react';
import { Card } from 'react-bootstrap';

type TaskCardProps = {
  title: string;
  completed: boolean;
};

export default function TaskCard({ title, completed }: TaskCardProps) {
  return <Card></Card>;
}
