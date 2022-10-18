import React from 'react'
import { Icon } from '@iconify/react'
import { Link } from "react-router-dom"
import AvatarPlaceholder from "../assets/avatar-placeholder.jpg"

function Navbar() {
    return (
        <nav className="h-full p-6 bg-primary flex flex-col items-center justify-between shadow-[2px_0_4px_rgba(0,0,0,.13)]">
            <ul className="flex flex-col gap-10">
                <li>
                    <Link to="/">
                        <Icon icon="iconoir:home-simple" className="text-2xl text-secondary" />
                    </Link>
                </li>
                <li>
                    <Link to="/pomodoro">
                        <Icon icon="iconoir:timer" className="text-2xl text-secondary" />
                    </Link>
                </li>
                <li>
                    <Link to="/todo">
                        <Icon icon="iconoir:task-list" className="text-2xl text-secondary" />
                    </Link>
                </li>
                <li>
                    <Link to="/statistic">
                        <Icon icon="iconoir:graph-up" className="text-2xl text-secondary" />
                    </Link>
                </li>
                <li>
                    <Link to="/community">
                        <Icon icon="iconoir:group" className="text-2xl text-secondary" />
                    </Link>
                </li>
                <li>
                    <Link to="/settings">
                        <Icon icon="iconoir:medal" className="text-2xl text-secondary" />
                    </Link>
                </li>
            </ul>
            <ul className="flex flex-col gap-8 items-center">
                <Link to="/settings">
                    <Icon icon="iconoir:settings" className="text-2xl text-secondary" />
                </Link>
                <Link to="/profile">
                    <img src="https://i.pravatar.cc/64" alt="avatar" className="w-8 h-8 rounded-full" />
                </Link>
            </ul>
        </nav>
    )
}

export default Navbar