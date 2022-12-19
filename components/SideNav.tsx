import React from "react";
import { Button, DropdownMenu, Link, Toggle } from ".";
import { useTheme } from "next-themes";
import {
  PersonIcon,
  StackIcon,
  GearIcon,
  ChatBubbleIcon,
  PaperPlaneIcon,
  BlendingModeIcon,
  CaretDownIcon
} from "@radix-ui/react-icons";
import { useRouter } from "next/router";
import { styled } from "../stitches.config";
import addTokenSet from "../convex/addTokenSet";
import { useMutation } from "../convex/_generated/react";

const NavContainer = styled("div", {
  display: "flex",
  minHeight: "100vh",
  width: "232px",
  padding: "$4 $3",
  backgroundColor: "$bgSecondary",
  borderRight: "1px solid $separator",
  gap: "$4",
  flexDirection: "column",
  justifyContent: "space-between",
});

const NavTitle = styled("h1", {
  fontSize: "$4",
  color: "$textPrimary",
  fontWeight: "400",
  margin: 0,
});

const Box = styled("div", {
  display: "flex",
});
const SideNav = () => {

  const addTokenSet = useMutation("addTokenSet");

  const { setTheme } = useTheme();
  const router = useRouter();

  const pathname = router.pathname;
  const handleActiveLink = (link: string) => {
    if (pathname.includes(link)) return true;
    return false;
  };

  const handleLogout = () => {
    localStorage.removeItem("space");
  };

  return (
    <NavContainer>
      <Box
        css={{
          flexDirection: "column",
          height: "100%",
          gap: "$4",
        }}
      >
        <Box
          css={{
            width: "100%",
            gap: '$2'
          }}
        >
          <Box css={{
            background: 'linear-gradient(580deg, $colors$violet8, $colors$orange8)',
            size: '$4',
            borderRadius: '$1'
          }} />
          <NavTitle css={{
            fontWeight: 500,
            fontFamily: '$mono'
          }}>
            Tokens</NavTitle>
        </Box>
        <DropdownMenu.DropdownMenu trigger={
          <Button stretch css={{
            justifyContent: 'space-between'
          }}>Team Sample <CaretDownIcon /> </Button>
        }>
            <DropdownMenu.Item>
              Team Sample 2
            </DropdownMenu.Item>
            <DropdownMenu.Item>
              Team Another Sample
            </DropdownMenu.Item>
            <DropdownMenu.Item>
              Team Sample 5
            </DropdownMenu.Item>
        </DropdownMenu.DropdownMenu>
        <Box
          css={{
            gap: "$1",
            flexDirection: "column",
          }}
        >
          <Link
            variant={"tertiary"}
            href={"/rooms"}
            active={handleActiveLink("rooms")}
            stretch
          >
            {" "}
            <StackIcon /> Token Sets{" "}
          </Link>
          <Link
            variant={"tertiary"}
            href={"/settings"}
            active={handleActiveLink("settings")}
            stretch
          >
            {" "}
            <GearIcon /> Settings{" "}
          </Link>
          <Link
            variant={"tertiary"}
            href={"/members"}
            active={handleActiveLink("members")}
            stretch
          >
            {" "}
            <PersonIcon /> Members{" "}
          </Link>
        </Box>
      </Box>
      <Box
        css={{
          gap: "$1",
          flexDirection: "column",
        }}
      >
        <Button variant={"tertiary"} stretch>
          {" "}
          <PaperPlaneIcon /> Feedback{" "}
        </Button>
        <Button variant={"tertiary"} stretch>
          {" "}
          <ChatBubbleIcon /> Help{" "}
        </Button>
      </Box>
      <Box
        css={{
          justifyContent: "space-between",
        }}
      >
        <Button
          onClick={() => {
            handleLogout();
          }}
        >
          {" "}
          Log out{" "}
        </Button>
        <Toggle
          onPressedChange={(pressed) => {
            pressed ? setTheme("light") : setTheme("dark");
          }}
        >
          <BlendingModeIcon />
        </Toggle>
      </Box>
    </NavContainer>
  );
};

SideNav.displayName = "SideNav";

export { SideNav };
