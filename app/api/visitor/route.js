import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const filePath = path.resolve('./visitor.json');

export async function GET() {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify({ count: 0 }));
  }

  const rawData = fs.readFileSync(filePath, 'utf-8');
  const data = JSON.parse(rawData);

  return NextResponse.json({ count: data.count });
}

export async function POST() {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify({ count: 0 }));
  }

  const rawData = fs.readFileSync(filePath, 'utf-8');
  const data = JSON.parse(rawData);

  data.count += 1;
  fs.writeFileSync(filePath, JSON.stringify(data));

  return NextResponse.json({ count: data.count });
}
