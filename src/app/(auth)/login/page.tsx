import Link from "next/link";

export default function LoginPage() {
    return (
        <div>
            <h1>You are on login page, click bellow for move to</h1>
            <Link href="/register">
                <h1 className="hover:text-blue-900 text-4xl font-bold cursor-pointer font-[family-name:var(--font-geist-mono)]">
                    Register Page
                </h1>
            </Link>
        </div>
    )
}