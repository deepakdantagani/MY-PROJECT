/**
 * Abstraction is a technique used in object-oriented programming that simplifies the program's structure. It focuses only 
 * on revealing the necessary details of a system and hiding irrelevant information to minimize its complexity
 */


class Circle {
    private radius: number;
    readonly pi: number;

    constructor(radius = 0) {
        if(radius < 0) throw new Error('Radius cannot be negative');
        this.radius = radius;
    }

    getArea(): number {
        return this.pi * (this.radius ** 2)
    }
}