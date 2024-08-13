import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { Bell, File, Home, Settings } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Sidebar = () => {
    return (
        <div className="hidden border-r bg-black lg:block">
            <div className="flex h-full max-h-screen flex-col gap-2">
                <div className="flex h-[60px] items-center px-6">
                <Link href="/" className="flex items-center select-none gap-x-2">
              <Image
                src="/icon.png"
                width={80}
                height={80}
                alt="Imo Logo"
                className="object-cover w-auto h-12 transition-all duration-700 ease-out dark:hidden"
              />

              <Image
                src="/profile.ico"
                width={80}
                height={80}
                alt="Imo Logo"
                className="object-cover w-auto h-20 transition-all duration-700 ease-out dark:hidden"
              />
            </Link>
                    <Button className="ml-auto h-8 w-8 text-black pro" size="icon" variant="outline">
                        <Bell className="h-4 w-4" />
                        <span className="sr-only">Toggle notifications</span>
                    </Button>
                </div>
                <div className="flex-1 overflow-auto py-2">
                    <nav className="grid items-start px-4 text-sm font-medium">
                        <Link
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-white transition-all hover:text-gray-900 hover:bg-white"
                            href="#"
                        >
                            <Home className="h-4 w-4" />
                            Dashboard
                        </Link>
                        <Link
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-white transition-all hover:text-gray-900 hover:bg-white"
                            href="#"
                        >
                            <File className="h-4 w-4" />
                            Conversions
                        </Link>
                        <Link
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-white transition-all hover:text-gray-900 hover:bg-white"
                            href="#"
                        >
                            <Settings className="h-4 w-4" />
                            Settings
                        </Link>
                    </nav>
                </div>
                <div className="mt-auto p-4">
                    <Card>
                        <CardHeader className="pb-4">
                            <CardTitle className="text-lg">Upgrade to Pro</CardTitle>
                            <CardDescription className="text-sm">
                                Unlock premium features and support the development of Flint.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Button className="w-full" size="sm">
                                Upgrade
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
};

export default Sidebar