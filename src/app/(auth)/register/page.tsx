import Link from "next/link";

export default function RegisterPage() {
    return (
        <div>
            <h1>You are on register page, click bellow for move to</h1>
            <Link href="/login">
                <h1 className="hover:text-blue-900 text-4xl font-bold cursor-pointer font-[family-name:var(--font-geist-mono)]">
                    Login Page
                </h1>
            </Link>
        </div>
    )
}