// handle-title.d.ts
declare function setTitle(title: string | number): void;
declare function getTitle(): string;
declare let documentTitle: string;

interface Date {
    format(f: string): string
}

