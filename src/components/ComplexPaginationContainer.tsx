import { OrdersResponse } from '@/utils/types';
import { constructPrevOrNextUrl, constructUrl } from '@/utils/pagination';
import { useLoaderData, useLocation } from 'react-router-dom';

import {
	Pagination,
	PaginationContent,
	// PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from './ui/pagination';
import React from 'react';

const ComplexPaginationContainer: React.FC = () => {
	const { meta } = useLoaderData() as OrdersResponse;
	const { pageCount, page } = meta.pagination;

	const { search, pathname } = useLocation();

	if (pageCount < 2) {
		return null;
	}

	type Construct = {
		pageNumber: number;
		isActive: boolean;
	};

	const constructButton = ({
		pageNumber,
		isActive,
	}: Construct): React.ReactNode => {
		const url = constructUrl({ pageNumber, search, pathname });
		return (
			<PaginationItem key={pageNumber}>
				<PaginationLink to={url} isActive={isActive}>
					{pageNumber}
				</PaginationLink>
			</PaginationItem>
		);
	};

	// const constructEllipsis = (key: string): React.ReactNode => {
	// 	return (
	// 		<PaginationItem key={key}>
	// 			<PaginationEllipsis />
	// 		</PaginationItem>
	// 	);
	// };

	const renderPagination = () => {
		const pages: React.ReactNode[] = [];
		// FIRST PAGE
		pages.push(constructButton({ pageNumber: 1, isActive: page === 1 }));
		// ELLIPSIS
		// if (page > 2) {
		// 	pages.push(constructEllipsis('dots-1'));
		// }
		// ACTIVE PAGE
		if (page !== 1 && page !== pageCount) {
			pages.push(constructButton({ pageNumber: page, isActive: true }));
		}
		// ELLIPSIS
		// if (page < pageCount - 2) {
		// 	pages.push(constructEllipsis('dots-2'));
		// }
		// LAST PAGE
		pages.push(
			constructButton({
				pageNumber: pageCount,
				isActive: page === pageCount,
			})
		);
		return pages;
	};

	const { prevUrl, nextUrl } = constructPrevOrNextUrl({
		currentPage: page,
		pageCount,
		search,
		pathname,
	});

	return (
		<Pagination className='mt-16'>
			<PaginationContent>
				<PaginationItem>
					<PaginationPrevious to={prevUrl} />
				</PaginationItem>
				{renderPagination()}
				<PaginationItem>
					<PaginationNext to={nextUrl} />
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	);
};

export default ComplexPaginationContainer;
