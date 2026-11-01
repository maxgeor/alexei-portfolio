"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useMemo, useState } from "react";
import { recentWorks, type Work } from "@/data/content";

const DRAG_INDEX_MIME = "application/x-work-index";

function reorderWorks(works: Work[], fromIndex: number, toIndex: number) {
  if (fromIndex === toIndex) {
    return works;
  }
  const next = [...works];
  const [moved] = next.splice(fromIndex, 1);
  next.splice(toIndex, 0, moved);
  return next;
}

function formatOrderList(works: readonly Work[]) {
  return works.map((work, index) => `${index + 1}. ${work.title}, ${work.year}`).join("\n");
}

function readDragIndex(event: React.DragEvent) {
  const raw =
    event.dataTransfer.getData(DRAG_INDEX_MIME) ||
    event.dataTransfer.getData("text/plain");
  if (raw === "") {
    return null;
  }
  const index = Number.parseInt(raw, 10);
  return Number.isNaN(index) ? null : index;
}

export function WorksOrderTool() {
  const [works, setWorks] = useState<Work[]>(() => [...recentWorks]);
  const [dragIndex, setDragIndex] = useState<number | null>(null);
  const [copyState, setCopyState] = useState<"idle" | "copied" | "error">("idle");

  const orderList = useMemo(() => formatOrderList(works), [works]);

  const moveWork = useCallback((fromIndex: number, toIndex: number) => {
    setWorks((current) => reorderWorks(current, fromIndex, toIndex));
  }, []);

  const handleDragStart = useCallback(
    (index: number, event: React.DragEvent<HTMLButtonElement>) => {
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData(DRAG_INDEX_MIME, String(index));
      event.dataTransfer.setData("text/plain", String(index));
      setDragIndex(index);
    },
    [],
  );

  const handleDragOver = useCallback((event: React.DragEvent<HTMLLIElement>) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const handleDrop = useCallback(
    (toIndex: number, event: React.DragEvent<HTMLLIElement>) => {
      event.preventDefault();
      const fromIndex = readDragIndex(event);
      if (fromIndex === null) {
        return;
      }
      moveWork(fromIndex, toIndex);
      setDragIndex(null);
    },
    [moveWork],
  );

  const handleDragEnd = useCallback(() => {
    setDragIndex(null);
  }, []);

  const resetOrder = useCallback(() => {
    setWorks([...recentWorks]);
    setCopyState("idle");
  }, []);

  const copyOrder = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(orderList);
      setCopyState("copied");
      window.setTimeout(() => setCopyState("idle"), 2000);
    } catch {
      setCopyState("error");
    }
  }, [orderList]);

  return (
    <div className="site-shell space-y-5 pb-[20px]">
      <div className="max-w-[75ch] space-y-5">
        <p>
          <Link href="/works" className="underline underline-offset-2">
            ← Recent Works
          </Link>
        </p>
        <div className="space-y-0">
          <h1 className="m-0 text-[14px] font-normal leading-[20px]">
            Works order (draft)
          </h1>
          <p className="m-0">
            Drag by the handle (⋮⋮) or use the arrows to rearrange. Copy the list
            below and send it to update the live gallery order.
          </p>
        </div>
      </div>

      <ul className="m-0 list-none space-y-3 p-0">
        {works.map((work, index) => (
          <li
            key={work.image}
            onDragOver={handleDragOver}
            onDrop={(event) => handleDrop(index, event)}
            className={`flex items-center gap-3 border border-black/15 p-2 ${
              dragIndex === index ? "bg-black/[0.03]" : ""
            }`}
          >
            <button
              type="button"
              draggable
              aria-label={`Drag ${work.title} to reorder`}
              onDragStart={(event) => handleDragStart(index, event)}
              onDragEnd={handleDragEnd}
              className="flex w-[2ch] shrink-0 cursor-grab flex-col items-center justify-center border-0 bg-transparent p-0 text-[10px] leading-[3px] text-ink active:cursor-grabbing"
            >
              <span aria-hidden>⋮</span>
              <span aria-hidden>⋮</span>
              <span aria-hidden>⋮</span>
            </button>
            <p className="m-0 w-[2ch] shrink-0 tabular-nums">{index + 1}.</p>
            <div className="w-[72px] shrink-0 leading-[0]">
              <Image
                src={work.image}
                alt=""
                width={work.width}
                height={work.height}
                sizes="72px"
                draggable={false}
                className="pointer-events-none block h-auto w-full select-none"
              />
            </div>
            <div className="min-w-0 flex-1 space-y-0">
              <p className="m-0">
                {work.title}, {work.year}
              </p>
              <p className="m-0 text-black/60">{work.material.en}</p>
            </div>
            <div className="flex shrink-0 flex-col gap-1">
              <button
                type="button"
                aria-label={`Move ${work.title} up`}
                disabled={index === 0}
                onClick={() => moveWork(index, index - 1)}
                className="cursor-pointer border border-black/15 bg-transparent px-2 py-0 text-ink disabled:cursor-not-allowed disabled:opacity-30"
              >
                ↑
              </button>
              <button
                type="button"
                aria-label={`Move ${work.title} down`}
                disabled={index === works.length - 1}
                onClick={() => moveWork(index, index + 1)}
                className="cursor-pointer border border-black/15 bg-transparent px-2 py-0 text-ink disabled:cursor-not-allowed disabled:opacity-30"
              >
                ↓
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="max-w-[75ch] space-y-3">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <button
            type="button"
            onClick={copyOrder}
            className="cursor-pointer border border-black bg-transparent px-3 py-1 text-ink"
          >
            {copyState === "copied"
              ? "Copied"
              : copyState === "error"
                ? "Copy failed — select text below"
                : "Copy order"}
          </button>
          <button
            type="button"
            onClick={resetOrder}
            className="cursor-pointer border-0 bg-transparent p-0 text-ink underline underline-offset-2"
          >
            Reset to current site order
          </button>
        </div>
        <label className="block space-y-1">
          <span className="sr-only">Order list</span>
          <textarea
            readOnly
            value={orderList}
            rows={Math.min(works.length + 1, 16)}
            className="w-full resize-y border border-black/15 bg-transparent p-2 font-[inherit] text-[14px] leading-[20px] text-ink"
            onFocus={(event) => event.target.select()}
          />
        </label>
      </div>
    </div>
  );
}
