import { Container, Text, ActionIcon, Group, SimpleGrid, Box, Stack, Divider } from '@mantine/core';
// Import React Icons
import { FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { MdHotel } from "react-icons/md";

const footerData = [
  {
    title: 'Management',
    links: [
      { label: 'Reception Dashboard', link: '#' },
      { label: 'Room Inventory', link: '#' },
      { label: 'Housekeeping', link: '#' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Help Center', link: '#' },
      { label: 'System Status', link: '#' },
      { label: 'Contact Admin', link: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', link: '#' },
      { label: 'Terms of Service', link: '#' },
      { label: 'Audit Logs', link: '#' },
    ],
  },
];

export function Footer() {
  const groups = footerData.map((group) => {
    const links = group.links.map((link, index) => (
      <Text
        key={index}
        component="a"
        href={link.link}
        size="sm"
        c="dimmed"
        style={{ 
          cursor: 'pointer', 
          transition: 'color 0.2s',
          display: 'block', // Ensures vertical stacking
          textDecoration: 'none'
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--mantine-color-gold-4)')}
        onMouseLeave={(e) => (e.currentTarget.style.color = '')}
      >
        {link.label}
      </Text>
    ));

    return (
      <Stack key={group.title} gap="xs">
        <Text fw={700} size="lg" >
          {group.title}
        </Text>
        {links}
      </Stack>
    );
  });

  return (
    <Box 
      component="footer" 
      pt={60} 
      pb={30} 
      style={{ borderTop: '1px solid var(--mantine-color-midnight-8)' }}
    >
      <Container size="lg">
        <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing={50}>
          <Stack gap="md">
            <Group gap="xs">
              {/* Hotel Icon from React Icons */}
              <MdHotel size={32} color="var(--mantine-color-gold-6)" />
              <Text fw={800} size="xl" c="gold.5" style={{ letterSpacing: '1px' }}>
                LUXURY STAY
              </Text>
            </Group>
            <Text size="sm" c="dimmed" lh={1.6}>
              Premium Hotel Management System. Streamlining hospitality with elegance and precision.
            </Text>
          </Stack>
          
          {groups}
        </SimpleGrid>

        <Divider my="xl" color="midnight.7" />

        <Group justify="space-between">
          <Text c="dimmed" size="xs">
            © 2026 Luxury Stay Management. All rights reserved.
          </Text>

          <Group gap="md" justify="flex-end" wrap="nowrap">
            <ActionIcon size="lg" color="gold.6" variant="subtle" radius="xl">
              <FaTwitter size={20} />
            </ActionIcon>
            <ActionIcon size="lg" color="gold.6" variant="subtle" radius="xl">
              <FaYoutube size={20} />
            </ActionIcon>
            <ActionIcon size="lg" color="gold.6" variant="subtle" radius="xl">
              <FaInstagram size={20} />
            </ActionIcon>
          </Group>
        </Group>
      </Container>
    </Box>
  );
}