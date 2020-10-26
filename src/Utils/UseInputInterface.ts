export interface UseInputIterface {
  value: string | number;
  onChange: (event: React.FormEvent<HTMLInputElement>) => void;
}
