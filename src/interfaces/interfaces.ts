import { CSSProperties, ReactNode } from "react";

export interface RecommendedProps {
  bgColor: string;
  percentageOfRecommended: string;
  image: string;
  title: string;
  vistis: string;
  speed: string;
}

export interface CardProps {
  title: string;
  image: string;
  amount: number;
  textOfAmount: string;
  description: string;
  bgColor: string;
  textColor: string;
}

export interface ButtonProps {
  color?: string;
  bgColor?: string;
  text: string;
  icon?: ReactNode;
  style?: CSSProperties;
}

export interface CarProps {
  title: string;
  image: string;
  type: string;
  drivingType: string;
  price: string;
  boughtNumber: number;
}

export interface ErrorMessageProps {
  message: string;
}

export interface SearchState {
  text: string;
}
