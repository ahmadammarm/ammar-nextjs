"use client";

import { type ReactElement, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import InfiniteScroll from "react-infinite-scroll-component";
import { ProjectCard } from "@/components/shared/ProjectCard";
import { NeoTabs } from "@/components/shared/NeoTabs";
import { PORTFOLIO_FILTERS, PORTFOLIO_PAGE_SIZE } from "@/constants/portfolio";
import { useIncrementalList } from "@/hooks/use-incremental-list";
import { filterProjects } from "@/lib/portfolio";
import { type PortfolioFilter } from "@/types/portfolio";

function LoadingMore(): ReactElement {
    return (
        <div className="flex justify-center py-10">
            <span className="px-5 py-2 bg-muted neo-border text-xs font-black uppercase tracking-wider text-foreground neo-shadow-sm">
                Loading More Projects...
            </span>
        </div>
    );
}

/** Category filter plus infinite-scrolling project grid. */
export function PortfolioExplorer(): ReactElement {
    const [filter, setFilter] = useState<PortfolioFilter>("all");
    const projects = useMemo(() => filterProjects(filter), [filter]);
    const { visibleItems, hasMore, loadMore } = useIncrementalList(projects, PORTFOLIO_PAGE_SIZE);

    return (
        <>
            <NeoTabs
                tabs={PORTFOLIO_FILTERS}
                value={filter}
                onChange={setFilter}
                className="mt-8 mb-12 md:mb-16 justify-center"
                tabClassName="px-4 sm:px-5 text-xs sm:text-sm"
            />

            <InfiniteScroll dataLength={visibleItems.length} next={loadMore} hasMore={hasMore} loader={<LoadingMore />}>
                <AnimatePresence mode="popLayout">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {visibleItems.map((project, index) => (
                            <motion.div
                                key={project.slug}
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.35, delay: (index % PORTFOLIO_PAGE_SIZE) * 0.05 }}
                                className="h-full flex flex-col"
                            >
                                <ProjectCard project={project} showSource />
                            </motion.div>
                        ))}
                    </div>
                </AnimatePresence>
            </InfiniteScroll>
        </>
    );
}
