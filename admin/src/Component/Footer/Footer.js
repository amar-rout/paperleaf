import React, { memo } from "react";

const Footer = () => {
    return (
        <footer className="py-4 bg-light mt-auto bottom-0">
            <div className="px-4 container">
                <div className="d-flex flex-1 justify-content-between align-items-center">
                    <div>© 2023 - <a href="https://www.paperleaf.co.in" className="link-dark text-decoration-none">Paperleaf</a></div>
                    <div>
                        Designed by <a href="https://www.techrestoreservice.com" class="link-primary text-decoration-none">TechRestoreServices</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default memo(Footer);