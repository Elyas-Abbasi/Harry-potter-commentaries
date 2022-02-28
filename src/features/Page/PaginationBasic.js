import {Pagination} from "@mui/material";
import {selectPageNumber} from "../livres/LivresSlice";
import {useSelector} from "react-redux";

export const PaginationBasic = () => {

    const pageNumber = useSelector(selectPageNumber)
    let items = []

    const renderedPagination = () => {
        let active = 3;

        for (let number = 1; number <= pageNumber; number++) {
            items.push(
                <Pagination.Item key={number} active={number === active}>
                    {number}
                </Pagination.Item>
            );
        }
        return items
    }

    return (
        <div>
            <Pagination bsSize="medium">{renderedPagination()}</Pagination>
        </div>
    )
}

export default PaginationBasic;
