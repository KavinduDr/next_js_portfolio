'use client'
import React, { useEffect, useRef } from 'react';

const CurvedLine = () => {
    const path = useRef<SVGPathElement>(null); // useRef inside the component
    let progress = 0;
    let x = 0.5;
    let reqId: number | null = null;
    let time = Math.PI/2;

    useEffect(() => {
        setPath({ value: progress });
        const handleResize = () => {
            setPath({ value: progress });
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    interface SetPathProps {
        value: number;
    }

    const setPath = ({ value }: SetPathProps) => {
        const width = window.innerWidth * 0.7;
        if (path.current) {
            path.current.setAttributeNS(null, "d", `M 0 50 Q ${width * x} ${50 + value} ${width} 50`);
        }
    };

    const animateIn = () => {
        if (reqId!== null) {
            cancelAnimationFrame(reqId);
            time = Math.PI/2;
        }
        setPath({ value: progress });
        reqId = requestAnimationFrame(animateIn);
    }

    interface MouseMoveEvent extends MouseEvent {
        movementY: number;
    }

    const manageMouseMove = (e: React.MouseEvent<HTMLSpanElement>) => {
        const { movementY } = e as unknown as MouseMoveEvent;
        const box: DOMRect = (e.target as HTMLElement).getBoundingClientRect();
        x = (e.clientX - box.left) / box.width;
        progress += movementY;
    }

    interface LerpProps {
        x: number;
        y: number;
        a: number;
    }

    const lerp = ({ x, y, a }: LerpProps): number => x * (1 - a) + y * a;

    const animateOut = () => {
        let newProgress = progress * Math.sin(time);
        setPath({ value: newProgress });

        progress = lerp({ x: progress, y: 0, a: 0.04 });
        time += 0.2;

        if(Math.abs(progress) > 0.5) {
            reqId = requestAnimationFrame(animateOut);
        }
        else{
            time = Math.PI/2;
            progress = 0;
        }
    }

    const restAnimation = () => {
        if (reqId !== null) {
            cancelAnimationFrame(reqId);
            animateOut();
        }
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-8">
            <div className="max-w-3xl">
                {/* Description Section */}
                <div className="relative w-full h-[1px] mb-5 bg-transparent">
                    {/* Box Element */}
                    <span onMouseEnter={() => {animateIn()}} onMouseLeave={() => {restAnimation()}} onMouseMove={(e) => {manageMouseMove(e)}} className="absolute top-[-20px] w-full h-10 z-[1] flex bg-transparent hover:h-[150px] hover:top-[-75px]"></span>

                    {/* SVG Element */}
                    <svg className="absolute w-full h-[100px] top-[-50px]">
                        <path ref={path} className="stroke-white fill-none stroke-[1px]"></path>
                    </svg>
                </div>

                <div className="mb-6">
                    <p className="text-sm text-gray-400">Smart Development</p>
                    <p className="text-2xl md:text-3xl font-semibold mt-2">
                        Combining unique design and rich technology, we build digital products exactly as they were designed, without shortcuts or simplifications.
                    </p>
                </div>

                {/* Tags Section */}
                <div className="flex flex-col gap-3">
                    <p className="text-gray-400 text-sm">Areas</p>
                    <div className="flex flex-wrap gap-3">
                        {["E-Commerce", "Finance", "Education", "Social", "Entertainment", "Medicine"].map((tag) => (
                            <p key={tag} className="border border-white px-4 py-2 rounded-full text-sm">
                                {tag.toUpperCase()}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CurvedLine;
