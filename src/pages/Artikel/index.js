import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {ILRelaxingWalkDog} from '../../assets';
import {Gap, Header} from '../../components';
import {colors, fonts} from '../../utils';

const Artikel = ({navigation, juduls, SubIsi1, SubIsi2, SubIsi3}) => {
  const [artikel, setArtikel] = useState([
    {
      id: 1,
      judul: 'Menyediakan Kandang yang Nyaman',
      SubIsi1:
        'Ketika berniat memelihara hewan peliharaan di rumah, pastikan kamu sudah menyediakan kandang yang nyaman sebagai tempat mereka tinggal.',
      SubIsi2:
        'Tiap hewan peliharaan memiliki kriteria kandang yang berbeda-beda, sehingga pastikan kandang yang kamu beli sudah sesuai dengan kriteria tersebut.',
      SubIsi3:
        'Beberapa alas tidur yang nyaman yang bisa kamu gunakan di antaranya adalah kain, selimut, handuk, dan lain sebagainya.',
    },
    {
      id: 2,
      judul: 'Beri Makan dan Minum Secara Teratur',
      SubIsi1:
        'Umumnya hewan peliharaan seperti kucing, anjing, dan kelinci dapat kamu beri makan setiap 3x sehari.',
      SubIsi2:
        'Pastikan untuk memberi makanan yang kaya akan nutrisi agar si manis dapat tumbuh sehat dan tidak mudah sakit.',
      SubIsi3:
        'Selain itu, kamu juga harus menyediakan persediaan air yang bersih untuk hewan peliharaanmu agar mereka dapat minum.',
    },
    {
      id: 3,
      judul: 'Menyediakan Tempat di Luar Kandang',
      SubIsi1:
        'Kucing  dan anjing akan mudah mengalami stress jika selalu terkurung di dalam kandang.',
      SubIsi2:
        'Pastikan kamu mengeluarkan mereka dari kandang secara rutin agar mereka dapat bermain bebas di area rumah.',
      SubIsi3:
        'Kamu dapat menyimpan alas tidur, mainan, atau makanan di area luar kandang agar hewan kesayanganmu dapat bermain dengan nyaman di luar kandang.',
    },
    {
      id: 4,
      judul: 'Menjaga Kebersihan Hewan Peliharaan',
      SubIsi1:
        'Salah satu cara yang bisa kamu lakukan untuk memastikan hewan selalu sehat adalah menjaga kebersihan mereka.',
      SubIsi2:
        'Jangan lupa untuk selalu memandikan kucing dan anjing secara rutin agar mereka bebas dari kutu dan kotoran.',
      SubIsi3:
        'Selain memandikan hewan, kamu juga harus menjaga rumah selalu bersih dan membersihkan kandang hewan dari kotoran.',
    },
    {
      id: 5,
      judul: 'Melatih Hewan secara Rutin',
      SubIsi1:
        'Beberapa hewan peliharaan dapat kamu latih agar dapat lebih patuh pada peraturan yang ada di rumah.',
      SubIsi2:
        'Jika kamu memelihara anjing, melatih anjing sangat wajib dilakukan agar mereka semakin sayang pada dirimu.',
      SubIsi3:
        'Sementara itu, kucing memang lebih sulit dilatih dibandingkan dengan anjing, tetapi jika kamu rajin melatih mereka, kucing akan menjadi semakin pintar dan semakin menyukai dirimu.',
    },
    {
      id: 6,
      judul: 'Periksa Hewan secara Teratur',
      SubIsi1:
        'Hewan lebih rawan terkena penyakit jika sering bepergian ke luar rumah.',
      SubIsi2:
        'Pemeriksaan secara berkala sangat penting untuk mendeteksi penyakit pada kucing atau hewan peliharaan lain yang kamu miliki.',
      SubIsi3:
        'Ketika kamu melihat hewan peliharaanmu lemas, sakit, atau muntah ada baiknya segera membawa mereka ke dokter hewan atau klinik hewan terdekat.',
    },
  ]);
  return (
    <View style={styles.page}>
      <Header title="Perawatan Hewan" onPress={() => navigation.goBack()} />
      <ScrollView style={styles.content}>
        <ILRelaxingWalkDog style={{alignSelf: 'center', marginTop: 20}} />
        <Gap height={20} />
        {artikel.map(artikels => {
          return (
            <View>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.txtJudul}>{artikels.id}.</Text>
                <Text key={artikels.id} style={styles.txtJudul}>
                  {' '}
                  {artikels.judul}
                </Text>
              </View>
              <Text style={styles.txtSubIsi}>{artikels.SubIsi1}</Text>
              <Text style={styles.txtSubIsi}>{artikels.SubIsi2}</Text>
              <Text style={styles.txtSubIsi}>{artikels.SubIsi3}</Text>
            </View>
          );
        })}
        <Gap height={20} />
      </ScrollView>
    </View>
  );
};

export default Artikel;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  txtJudul: {
    fontFamily: fonts.primary[600],
    fontSize: 16,
    color: colors.text.primary,
    marginTop: 15,
  },
  txtSubIsi: {
    fontFamily: fonts.primary[400],
    fontSize: 14,
    color: colors.text.primary,
    marginTop: 5,
    paddingLeft: 13,
    textAlign: 'justify',
  },
  content: {
    paddingHorizontal: 15,
  },
});
