"use client";
import React, { useCallback, useState, forwardRef, useEffect } from "react";

// shadcn
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

// utils
import { cn } from "@/lib/utils";

// assets
import { ChevronDown, CheckIcon, Globe } from "lucide-react";
import { CircleFlag } from "react-circle-flags";

// data
import { countries } from "country-data-list";

// Country interface
export interface Country {
    alpha2: string;
    alpha3: string;
    countryCallingCodes: string[];
    currencies: string[];
    emoji?: string;
    ioc: string;
    languages: string[];
    name: string;
    status: string;
}

// Dropdown props
interface CountryDropdownProps {
    options?: Country[];
    onChange?: (country: string) => void;
    defaultValue?: string;
    disabled?: boolean;
    placeholder?: string;
    slim?: boolean;
}

const CountryDropdownComponent = (
    {
        options = countries.all.filter(
            (country: Country) =>
                country.emoji && country.status !== "deleted" && country.ioc !== "PRK"
        ),
        onChange,
        defaultValue,
        disabled = false,
        placeholder = "Select a country",
        slim = false,
        ...props
    }: CountryDropdownProps,
    ref: React.ForwardedRef<HTMLButtonElement>
) => {
    const [open, setOpen] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState<Country | undefined>(
        undefined
    );

    useEffect(() => {
        if (defaultValue) {
            const initialCountry = options.find(
                (country) => country.alpha3 === defaultValue
            );
            if (initialCountry) {
                setSelectedCountry(initialCountry);
            } else {
                // Reset selected country if defaultValue is not found
                setSelectedCountry(undefined);
            }
        } else {
            // Reset selected country if defaultValue is undefined or null
            setSelectedCountry(undefined);
        }
    }, []);

    const handleSelect = useCallback(
        (country: Country) => {
            // console.log("🌍 CountryDropdown value: ", country);
            setSelectedCountry(country);
            onChange?.(country?.name);
            setOpen(false);
        },
        [onChange]
    );

    const triggerClasses = cn(
        "flex w-full items-center h-[40px] sm:h-[52px] justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
        slim === true && "w-20"
    );

    


    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger
                ref={ref}
                className={triggerClasses}
                disabled={disabled}
                {...props}
            >
            
                {selectedCountry ? (
                    <div className="flex items-center flex-grow w-0 gap-2 overflow-hidden">
                        <div className="inline-flex items-center justify-center w-5 h-5 shrink-0 overflow-hidden">
                            {/* <CircleFlag
                                countryCode={selectedCountry.alpha2.toLowerCase()}
                                height={20}
                            /> */}
                            <img
                                src={`https://flagcdn.com/w80/${selectedCountry.alpha2.toLowerCase()}.png`}
                                alt={`${selectedCountry.alpha2.toLowerCase()} flag`}
                            />
                        </div>
                        {slim === false && (
                            <span className="overflow-hidden text-ellipsis whitespace-nowrap">
                                {selectedCountry.name}
                            </span>
                        )}
                    </div>
                ) : (
                    <span className="text-secondary">
                        {slim === false ? (
                            placeholder || setSelectedCountry.name
                        ) : (
                            <Globe size={20} />
                        )}
                    </span>
                )}
                <ChevronDown size={16} />
            </PopoverTrigger>
            <PopoverContent
                collisionPadding={10}
                side="bottom"
                className="min-w-[--radix-popper-anchor-width] p-0"
            >
                <Command className="w-full max-h-[200px] sm:max-h-[270px]">
                    <CommandList>
                        <div className="sticky top-0 z-10 bg-popover">
                            <CommandInput placeholder="Search country..." />
                        </div>
                        <CommandEmpty>No country found.</CommandEmpty>
                        <CommandGroup>
                            {options
                                .filter((x) => x.name)
                                .map((option, key: number) => (
                                    <CommandItem
                                        className="flex items-center w-full gap-2"
                                        key={key}
                                        onSelect={() => handleSelect(option)}
                                    >
                                        <div className="flex flex-grow w-0 space-x-2 overflow-hidden">
                                            <div className="inline-flex items-center justify-center w-5 h-5 shrink-0 overflow-hidden">
                                                {/* <CircleFlag
                                                    countryCode={option.alpha2.toLowerCase()}
                                                    height={20}
                                                /> */}
                                                <img
                                                    src={`https://flagcdn.com/w80/${option.alpha2.toLowerCase()}.png`}
                                                    alt={`${option.alpha2.toLowerCase()} flag`}
                                                />
                                            </div>
                                            <span className="overflow-hidden text-ellipsis whitespace-nowrap">
                                                {option.name}
                                            </span>
                                        </div>
                                        <CheckIcon
                                            className={cn(
                                                "ml-auto h-4 w-4 shrink-0",
                                                option.name === selectedCountry?.name
                                                    ? "opacity-100"
                                                    : "opacity-0"
                                            )}
                                        />
                                    </CommandItem>
                                ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
};

CountryDropdownComponent.displayName = "CountryDropdownComponent";

export const CountryDropdown = forwardRef(CountryDropdownComponent);