declare global {
    interface String {
        prependHello(): string;
    }
}

export default function foo(): string;