import { Document, Page, Text, View, StyleSheet, Image, Font } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    orientation: 'landscape',
    backgroundColor: '#ffffff',
    padding: 20,
  },
  borderDouble: {
    border: '8pt double #ca8a04',
    height: '100%',
    padding: 2,
  },
  innerBorder: {
    border: '2pt solid #1e3a8a',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 40,
    textAlign: 'center',
  },
  headerText: {
    color: '#1e3a8a',
    fontSize: 10,
    letterSpacing: 2,
    textTransform: 'uppercase',
    marginTop: 10,
  },
  title: {
    fontSize: 50,
    color: '#1e3a8a',
    fontFamily: 'Times-Italic', // Default serif font
  },
  subtitle: {
    fontSize: 14,
    color: '#a16207',
    letterSpacing: 3,
    textTransform: 'uppercase',
  },
  name: {
    fontSize: 36,
    color: '#1d4ed8',
    marginVertical: 20,
    borderBottom: '1pt solid #eee',
  },
  bodyText: {
    fontSize: 16,
    color: '#374151',
    textAlign: 'center',
    lineHeight: 1.5,
  },
  signatureRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 40,
  },
  sigBlock: {
    borderTop: '1pt solid #1e3a8a',
    width: 150,
    paddingTop: 5,
    textAlign: 'center',
  },
  sigText: {
    fontSize: 8,
    color: '#1e3a8a',
    fontWeight: 'bold',
  }
});

export const CertificatePDF = ({ member, certificateNo }) => (
  <Document>
    <Page size="A4" orientation="landscape" style={styles.page}>
      <View style={styles.borderDouble}>
        <View style={styles.innerBorder}>
          {/* Logo - Note: Use absolute URLs or public paths */}
          <View>
             <Text style={styles.headerText}>IEEE Student Branch NIT Patna</Text>
          </View>

          <View>
            <Text style={styles.title}>Certificate</Text>
            <Text style={styles.subtitle}>of Appreciation</Text>
          </View>

          <View>
            <Text style={{ fontSize: 14, fontStyle: 'italic', color: '#6b7280' }}>
              This certificate is proudly presented to
            </Text>
            <Text style={styles.name}>{member?.name}</Text>
            <Text style={styles.bodyText}>
              For outstanding dedication and contribution as a member of the {member?.team} Team
              within the IEEE Student Branch, NIT Patna, during the Academic Session 2025-2026.
            </Text>
          </View>

          <View style={styles.signatureRow}>
            <View style={styles.sigBlock}>
              <Text style={styles.sigText}>BRANCH COUNSELOR</Text>
            </View>
            <Text style={{ fontSize: 8, color: '#9ca3af' }}>ID: {certificateNo}</Text>
            <View style={styles.sigBlock}>
              <Text style={styles.sigText}>PROFESSOR IN-CHARGE</Text>
            </View>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);