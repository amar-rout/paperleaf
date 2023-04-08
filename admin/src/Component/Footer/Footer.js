import React, { memo } from "react";

const Footer = () => {
    return (
        <footer className="py-4 bg-light mt-auto">
            <div className="container-fluid px-4">
                <div className="text-center">
                    <div>© 2023 - <a href="https://www.paperleaf.co.in">Paperleaf</a></div>
                    <div>
                        <nav class="nav gap-4">
                            <p>
                                Designed by <a href="https://www.techrestoreservice.com" class="nav-link">TechRestoreServices</a>
                            </p>
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default memo(Footer);