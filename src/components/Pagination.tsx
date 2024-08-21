import React from 'react';
import {Stack} from "@mui/material";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
                                                   currentPage,
                                                   totalPages,
                                                   onPageChange,
                                               }) => {
    const handlePrevious = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNext = () => {
        onPageChange(currentPage + 1);

        // if (currentPage < totalPages) {
        //     onPageChange(currentPage + 1);
        // }
    };

    return (
        <Stack direction={'row'} spacing={2} >
            <button
                onClick={handlePrevious}
                disabled={currentPage === 1}
                style={{
                    backgroundColor: "rgb(226, 227, 236)",
                    color: "rgb(38, 42, 65)",
                    border: "none",
                    borderRadius: "12px",
                    width: "36px",
                    height: "36px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: currentPage === 1 ? "not-allowed" : "pointer",
                    transition: "background-color 0.3s ease",
                }}
            >


                <KeyboardArrowLeftIcon/>
            </button>
            <button
                style={{
                    backgroundColor:  "rgb(38, 42, 65)",
                    color: "#fff",
                    border: "none",
                    borderRadius: "12px",
                    width: "36px",
                    height: "36px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    transition: "background-color 0.3s ease",
                }}
                onClick={handleNext}
                // disabled={currentPage === totalPages}
            >



                <KeyboardArrowRightIcon/>
            </button>



        </Stack>
    );
};

export default Pagination;
